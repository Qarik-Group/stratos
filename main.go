package main

import (
	"crypto/tls"
	"database/sql"
	"fmt"
	"io/ioutil"
	"log"
	"math/rand"
	"net/http"
	"os"
	"time"

	"github.com/gorilla/sessions"
	"github.com/hpcloud/portal-proxy/datastore"
	"github.com/hpcloud/ucpconfig"
	"github.com/labstack/echo"
	"github.com/labstack/echo/engine/standard"
	"github.com/labstack/echo/middleware"
)

var (
	httpClient = http.Client{}
)

func main() {
	log.SetOutput(os.Stdout)

	log.Println("Proxy initialization started.")

	var portalConfig portalConfig
	portalConfig, err := loadPortalConfig(portalConfig)
	if err != nil {
		log.Println(err)
		os.Exit(1)
	}
	log.Println("Proxy configuration loaded.")

	portalConfig.EncryptionKeyInBytes, err = setEncryptionKey(portalConfig)
	if err != nil {
		log.Println(err)
		os.Exit(1)
	}
	log.Println("Encryption key set.")

	var databaseConfig datastore.DatabaseConfig
	databaseConfig, err = loadDatabaseConfig(databaseConfig)
	if err != nil {
		log.Println(err)
		os.Exit(1)
	}
	log.Println("Proxy database configuration loaded.")

	var databaseConnectionPool *sql.DB
	databaseConnectionPool, err = datastore.GetConnection(databaseConfig)
	if err != nil {
		log.Println(err)
		os.Exit(1)
	}
	defer databaseConnectionPool.Close()
	log.Println("Proxy database connection pool created.")

	portalProxy := newPortalProxy(portalConfig, databaseConnectionPool)
	log.Println("Proxy waiting for requests.")

	initializeHTTPClient(portalConfig.SkipTLSVerification,
		time.Duration(portalConfig.HTTPClientTimeoutInSecs)*time.Second)
	log.Println("HTTP client initialized.")

	log.Printf("%v", portalConfig)
	if err := start(portalProxy); err != nil {
		log.Printf("Unable to start the proxy: %v", err)
		os.Exit(1)
	}
	log.Printf("Proxy listening on address %s and port %d", portalConfig.TLSAddress, 80)
}

// TODO (wchrisjohnson): This should be changed to pull in the encryption key from the env.
// For the time being, I am just generating a 256 bit / 32 byte / AES-256 encryption key
// here. By  the time I am done with this PR, this will come in via the env var.
func setEncryptionKey(pc portalConfig) ([]byte, error) {
	key := make([]byte, 32)
	_, err := rand.Read(key)

	if err != nil {
		return nil, err
	}

	// b64.StdEncoding.DecodeString(p.Config.EncryptionKey)
	// portalConfig.EncryptionKey = b64.StdEncoding.EncodeToString(key)

	return key, nil
}

func loadPortalConfig(pc portalConfig) (portalConfig, error) {
	if err := ucpconfig.Load(&pc); err != nil {
		return pc, fmt.Errorf("Unable to load portal configuration. %v", err)
	}
	return pc, nil
}

func loadDatabaseConfig(dc datastore.DatabaseConfig) (datastore.DatabaseConfig, error) {
	if err := ucpconfig.Load(&dc); err != nil {
		return dc, fmt.Errorf("Unable to load database configuration. %v", err)
	}

	dc, err := datastore.NewDatabaseConnectionParametersFromConfig(dc)
	if err != nil {
		return dc, fmt.Errorf("Unable to load database configuration. %v", err)
	}
	return dc, nil
}

func createTempCertFiles(pc portalConfig) (string, string, error) {
	certFilename := "pproxy.crt"
	certKeyFilename := "pproxy.key"

	// If there's a developer cert/key, use that instead of using what's in the
	// config. This is to bypass an issue with docker-compose not being able to
	// handle multi-line variables in an env_file
	devCertsDir := "dev-certs/"
	_, errDevcert := os.Stat(devCertsDir + certFilename)
	_, errDevkey := os.Stat(devCertsDir + certKeyFilename)
	if errDevcert == nil && errDevkey == nil {
		return devCertsDir + certFilename, devCertsDir + certKeyFilename, nil
	}

	err := ioutil.WriteFile(certFilename, []byte(pc.TLSCert), 0600)
	if err != nil {
		return "", "", err
	}

	err = ioutil.WriteFile(certKeyFilename, []byte(pc.TLSCertKey), 0600)
	if err != nil {
		return "", "", err
	}
	return certFilename, certKeyFilename, nil
}

func newPortalProxy(pc portalConfig, dcp *sql.DB) *portalProxy {
	pp := &portalProxy{
		Config:                 pc,
		DatabaseConnectionPool: dcp,
	}

	return pp
}

func initializeHTTPClient(skipCertVerification bool, timeoutInSeconds time.Duration) {
	tr := &http.Transport{Proxy: http.ProxyFromEnvironment}
	if skipCertVerification {
		tr.TLSClientConfig = &tls.Config{InsecureSkipVerify: true}
	}
	httpClient.Transport = tr
	httpClient.Timeout = time.Second * timeoutInSeconds
}

func start(p *portalProxy) error {
	e := echo.New()
	// Root level middleware
	e.Use(sessionCleanupMiddleware)
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins:     p.Config.AllowedOrigins,
		AllowMethods:     []string{echo.GET, echo.PUT, echo.POST, echo.DELETE},
		AllowCredentials: true,
	}))
	e.Use(errorLoggingMiddleware)

	p.initCookieStore()
	p.registerRoutes(e)

	certFile, certKeyFile, err := createTempCertFiles(p.Config)
	if err != nil {
		return err
	}

	engine := standard.WithTLS(p.Config.TLSAddress, certFile, certKeyFile)
	e.Run(engine)

	return nil
}

func (p *portalProxy) initCookieStore() {
	p.CookieStore = sessions.NewCookieStore([]byte(p.Config.CookieStoreSecret))
}

func (p *portalProxy) registerRoutes(e *echo.Echo) {

	// TODO(wchrisjohnson): remove prior to shipping  https://jira.hpcloud.net/browse/TEAMFOUR-633
	e.Static("/*", "demo")

	e.POST("/v1/auth/login/uaa", p.loginToUAA)
	e.POST("/v1/auth/logout", p.logout)

	sessionGroup := e.Group("/v1")
	sessionGroup.Use(p.sessionMiddleware)

	// Connect to HCF cluster
	sessionGroup.POST("/auth/login/cnsi", p.loginToCNSI)

	// Disconnect HCF cluster
	sessionGroup.POST("/auth/logout/cnsi", p.logoutOfCNSI)

	// Verify Session
	sessionGroup.Get("/auth/session/verify", p.verifySession)

	// should be referenced as /v1/github/oauth/auth
	sessionGroup.GET("/github/oauth/auth", p.handleGitHubAuth)

	// should be referenced as /v1/github/oauth/callback
	sessionGroup.GET("/github/oauth/callback", p.handleGitHubCallback)

	// Register clusters
	sessionGroup.POST("/register/hcf", p.registerHCFCluster)
	sessionGroup.POST("/register/hce", p.registerHCECluster)

	// TODO(wchrisjohnson): revisit the API and fix these wonky calls.  https://jira.hpcloud.net/browse/TEAMFOUR-620
	sessionGroup.POST("/unregister", p.unregisterCluster)
	// sessionGroup.DELETE("/cnsis", p.removeCluster)

	// CNSI operations
	sessionGroup.GET("/cnsis", p.listCNSIs)
	sessionGroup.GET("/cnsis/registered", p.listRegisteredCNSIs)

	// Applications Log Streams
	sessionGroup.GET("/:cnsiGuid/apps/:appGuid/stream", p.appStream)

	group := sessionGroup.Group("/proxy")
	group.Any("/*", p.proxy)
}
