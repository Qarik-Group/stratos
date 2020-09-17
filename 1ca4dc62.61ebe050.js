(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(2),i=n(6),o=(n(0),n(145)),l={id:"developers-guide",title:"Developing the Stratos Console",sidebar_label:"Stratos Development"},r={id:"guides/developers/developers-guide",isDocsHomePage:!1,title:"Developing the Stratos Console",description:"1. Introduction",source:"@site/docs/guides/developers/developers-guide.md",permalink:"/docs/guides/developers/developers-guide",editUrl:"https://github.com/cloudfoundry/stratos/edit/master/website/docs/guides/developers/developers-guide.md",sidebar_label:"Stratos Development",sidebar:"docs",previous:{title:"Contributing to Stratos",permalink:"/docs/guides/contribution/contributing"},next:{title:"Stratos Tech + Developer Environment",permalink:"/docs/guides/developers/developers-guide-env-tech"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Frontend Development",id:"frontend-development",children:[{value:"Introduction to the stack",id:"introduction-to-the-stack",children:[]},{value:"Set up Dependencies",id:"set-up-dependencies",children:[]},{value:"Configuration",id:"configuration",children:[]}]},{value:"Run the frontend",id:"run-the-frontend",children:[]},{value:"Build",id:"build",children:[]},{value:"Creating angular items via angular cli",id:"creating-angular-items-via-angular-cli",children:[]},{value:"Theming",id:"theming",children:[]},{value:"Test",id:"test",children:[{value:"Lint",id:"lint",children:[]},{value:"Unit tests",id:"unit-tests",children:[]},{value:"End-to-end tests",id:"end-to-end-tests",children:[]},{value:"Code Climate",id:"code-climate",children:[]},{value:"Stratos Continue Integration",id:"stratos-continue-integration",children:[]}]},{value:"Backend Development",id:"backend-development",children:[{value:"Pre-requisites",id:"pre-requisites",children:[]},{value:"Building the back-end",id:"building-the-back-end",children:[]},{value:"Configuration",id:"configuration-1",children:[]}]}],b={rightToc:c};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#introduction"}),"Introduction")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#frontend-development"}),"Frontend Development")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#backend-development"}),"Backend Development"))),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"Stratos comprises of two main components:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A front-end UI that runs in your web browser. This is written in ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.typescriptlang.org/"}),"Typescript")," and uses the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://angular.io/"}),"Angular")," framework."),Object(o.b)("li",{parentName:"ul"},"A back-end that provides a web-based API to the front-end. This is written in Go.")),Object(o.b)("p",null,"Depending on what you are contributing, you will need to develop with the front-end, back-end or both."),Object(o.b)("h2",{id:"frontend-development"},"Frontend Development"),Object(o.b)("h3",{id:"introduction-to-the-stack"},"Introduction to the stack"),Object(o.b)("p",null,"Have a look through the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/guides/developers/developers-guide-env-tech"}),"Env + Tech")," page to get acquainted with some of the new technologies used in v2.\nThese include video's, tutorials and examples of Angular 2+, Typescript and Redux. There's also some advice on helpful plugins to use if\nusing Visual Studio Code. If you feel comfortable with these and are happy with your dev environment please skip straight to\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#set-up-dependencies"}),"Set up Dependencies")),Object(o.b)("h3",{id:"set-up-dependencies"},"Set up Dependencies"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Set up a Stratos backend - The frontend cannot run without a backend. Both backend and frontend exist in this same repo.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Don't need to make changes to the backend code? To set up a backend run through the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/cloudfoundry/stratos/blob/master/deploy/README.md"}),"deploy section"),",\nchoose a deployment method and bring one up. These deployments will bring up the entire backend, including api service and database\nalong with a V2 frontend."),Object(o.b)("li",{parentName:"ul"},"Need to make changes to the backend code? Follow the below ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#Backend-Development"}),"Backend Development")," set up guide"))),Object(o.b)("li",{parentName:"ul"},"Install ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://nodejs.org"}),"NodeJs")," (minimum node version 12.13.0)"),Object(o.b)("li",{parentName:"ul"},"Install ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://cli.angular.io/"}),"Angular CLI")," - ",Object(o.b)("inlineCode",{parentName:"li"},"npm install -g @angular/cli"))),Object(o.b)("h3",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"Configuration information can be found in two places"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"./proxy.conf.js"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"In new forks this is missing and needs to be created using ",Object(o.b)("inlineCode",{parentName:"li"},"./proxy.conf.template.js")," as a template."),Object(o.b)("li",{parentName:"ul"},"Contains the address of the backend. Which will either be...",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"If the backend is deployed via the instructions in the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/cloudfoundry/stratos/blob/master/deploy/README.md"}),"deploy section"),"\nthe url will be the same address as the V1 console's frontend address. For instance ",Object(o.b)("inlineCode",{parentName:"li"},"https://localhost")," would translate to",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'const PROXY_CONFIG = {\n  "/pp": {\n    "target": {\n    "host": "localhost",\n    "protocol": "https:",\n    "port": 443\n  },\n  "secure": false,\n  "changeOrigin": true,\n  "ws": true,\n}\n'))),Object(o.b)("li",{parentName:"ul"},"If the backend is running locally using the instructions ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#Backend-Development"}),"Backend Development")," below the url will local host\nwith a port of the ",Object(o.b)("inlineCode",{parentName:"li"},"CONSOLE_PROXY_TLS_ADDRESS")," value from ",Object(o.b)("inlineCode",{parentName:"li"},"src/jetstream/config.properties"),". By default this will be 5445. For\ninstance",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'const PROXY_CONFIG = {\n  "/pp": {\n    "target": {\n      "host": "localhost",\n      "protocol": "https:",\n      "port": 5443\n    },\n    "ws": true,\n    "secure": false,\n    "changeOrigin": true,\n  }\n}\n'))))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"./src/frontend/environments/environment.ts")," for developer vs production like config",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"This contains more general settings for the frontend and does not usually need to be changed")))),Object(o.b)("h2",{id:"run-the-frontend"},"Run the frontend"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"(First time only) Copy ",Object(o.b)("inlineCode",{parentName:"li"},"./proxy.conf.template.js")," to ",Object(o.b)("inlineCode",{parentName:"li"},"./proxy.conf.js")," and update with required Jetstream url (see above for more info)"),Object(o.b)("li",{parentName:"ol"},"Run ",Object(o.b)("inlineCode",{parentName:"li"},"npm install")),Object(o.b)("li",{parentName:"ol"},"Run ",Object(o.b)("inlineCode",{parentName:"li"},"npm start")," for a dev server. (the app will automatically reload if you change any of the source files)",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"If this times out please use ",Object(o.b)("inlineCode",{parentName:"li"},"npm run start-high-mem")," instead"),Object(o.b)("li",{parentName:"ul"},"To change the port from the default 4200, add ",Object(o.b)("inlineCode",{parentName:"li"},"-- --port [new port number]")),Object(o.b)("li",{parentName:"ul"},"To stop the automatic reload every time a resource changes add ",Object(o.b)("inlineCode",{parentName:"li"},"-- --live-reload false")),Object(o.b)("li",{parentName:"ul"},"To do both the above use ",Object(o.b)("inlineCode",{parentName:"li"},"-- --live-reload false --port [new port number]")))),Object(o.b)("li",{parentName:"ol"},"Navigate to ",Object(o.b)("inlineCode",{parentName:"li"},"https://localhost:4200/"),". The credentials to log in will be dependent on the Jetstream the console points at. Please refer\nto the guides used when setting up the backend for more information")),Object(o.b)("h2",{id:"build"},"Build"),Object(o.b)("p",null,"Run ",Object(o.b)("inlineCode",{parentName:"p"},"npm run build")," to build the project."),Object(o.b)("p",null,"The build artefacts will be stored in the ",Object(o.b)("inlineCode",{parentName:"p"},"dist/")," directory. This will output a production build of the application."),Object(o.b)("h2",{id:"creating-angular-items-via-angular-cli"},"Creating angular items via angular cli"),Object(o.b)("p",null,"To create a new angular component run ",Object(o.b)("inlineCode",{parentName:"p"},"ng generate component component-name"),". You can use a similar command to create other types of angular\nitems ",Object(o.b)("inlineCode",{parentName:"p"},"ng generate <directive|pipe|service|class|guard|interface|enum|module> <name>"),"."),Object(o.b)("h2",{id:"theming"},"Theming"),Object(o.b)("p",null,"We use the angular material theming mechanism. See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://material.angular.io/guide/theming-your-components"}),"here")," for more information about theming new components added to stratos."),Object(o.b)("h2",{id:"test"},"Test"),Object(o.b)("h3",{id:"lint"},"Lint"),Object(o.b)("p",null,"Run ",Object(o.b)("inlineCode",{parentName:"p"},"npm run lint")," to execute tslint lint checking."),Object(o.b)("h3",{id:"unit-tests"},"Unit tests"),Object(o.b)("p",null,"Run ",Object(o.b)("inlineCode",{parentName:"p"},"npm test")," to execute the unit tests via ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://karma-runner.github.io"}),"Karma"),". Coverage information can be found in ",Object(o.b)("inlineCode",{parentName:"p"},"./coverage")),Object(o.b)("p",null,"To execute an individual package run ",Object(o.b)("inlineCode",{parentName:"p"},"ng test <package name>"),". To execute the tests again automatically on code changes add ",Object(o.b)("inlineCode",{parentName:"p"},"--watch=true")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"NOTE")," npm test will search for chrome on your path. If this is not so please set an env var CHROME_BIN pointing to your executable\n(chromium is fine too).")),Object(o.b)("h3",{id:"end-to-end-tests"},"End-to-end tests"),Object(o.b)("p",null,"Run ",Object(o.b)("inlineCode",{parentName:"p"},"npm run e2e")," to execute the end-to-end tests via ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.protractortest.org/"}),"Protractor"),"."),Object(o.b)("p",null,"Run ",Object(o.b)("inlineCode",{parentName:"p"},"npm run e2e-dev")," to execute end-to-end tests against a locally running instance on ",Object(o.b)("inlineCode",{parentName:"p"},"https://localhost:4200")),Object(o.b)("p",null,"More information on the E2E tests and pre-requisites for running them is available here - ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/guides/developers/developers-guide-e2e-tests"}),"E2E Tests"),"."),Object(o.b)("h3",{id:"code-climate"},"Code Climate"),Object(o.b)("p",null,"We use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://codeclimate.com/github/cloudfoundry-incubator/stratos"}),"Code Climate")," to check for general code quality issues. This executes against Pull\nRequests on creation/push."),Object(o.b)("h4",{id:"running-code-climate-locally"},"Running Code Climate locally"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Generally we would not advise doing this and just rely on the code climate gate to run when pull requests are submitted")),Object(o.b)("p",null,"To run locally see instructions ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/codeclimate/codeclimate"}),"here")," to install Code Climate CLI\nand engine via docker. Once set ensure you're in the root of the project and execute the following (it may take a while)"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"codeclimate analyze\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"NOTE")," Unfortunately this highlights all current issues and not those that are the diff between any master and feature branch. Analyze\ncan be ran against a single/sub set of files, again with all current issues, but a little more digestible.")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"codeclimate analyze <path to file/s>\n")),Object(o.b)("p",null,"In a feature branch to compare files that have changed to master, for instance, use the following"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"git checkout feature-branch-A\ncodeclimate analyze $(git diff --name-only master)\n")),Object(o.b)("p",null,"You can also run the above command via npm"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"npm run climate\n")),Object(o.b)("h3",{id:"stratos-continue-integration"},"Stratos Continue Integration"),Object(o.b)("p",null,"For each new pull request and any subsequent pushes to it the following actions are executed"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Code quality analysis via Code Climate - ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://codeclimate.com/"}),"https://codeclimate.com/")),Object(o.b)("li",{parentName:"ul"},"Jenkins CI run, covering..",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Frontend lint check"),Object(o.b)("li",{parentName:"ul"},"Backend lint check"),Object(o.b)("li",{parentName:"ul"},"Frontend unit tests"),Object(o.b)("li",{parentName:"ul"},"Backend unit tests"),Object(o.b)("li",{parentName:"ul"},"End to end tests"))),Object(o.b)("li",{parentName:"ul"},"Security anaylsis via Snyk - ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://snyk.io/"}),"https://snyk.io/"))),Object(o.b)("h2",{id:"backend-development"},"Backend Development"),Object(o.b)("p",null,"Jetstream is the back-end for Stratos. It is written in Go."),Object(o.b)("p",null,"We use Go Modules for dependency management."),Object(o.b)("h3",{id:"pre-requisites"},"Pre-requisites"),Object(o.b)("p",null,"You will need the following installed/available:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"go 1.12 or later.")),Object(o.b)("p",null,"*For authentication, ",Object(o.b)("strong",{parentName:"p"},"either*")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A UAA instance"),Object(o.b)("li",{parentName:"ul"},"A local user account ")),Object(o.b)("h3",{id:"building-the-back-end"},"Building the back-end"),Object(o.b)("h4",{id:"build-1"},"Build"),Object(o.b)("p",null,"From the ",Object(o.b)("inlineCode",{parentName:"p"},"src/jetstream")," folder, build the Stratos back-end with:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"npm run build-backend\n")),Object(o.b)("p",null,"The back-end executable is named ",Object(o.b)("inlineCode",{parentName:"p"},"jetstream")," and should be created within the ",Object(o.b)("inlineCode",{parentName:"p"},"src/jetstream")," folder."),Object(o.b)("h3",{id:"configuration-1"},"Configuration"),Object(o.b)("p",null,"Configuration can either be done via"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Environment Variable and/or Config File"),Object(o.b)("li",{parentName:"ul"},"In the UI when you first use a front end with this backend")),Object(o.b)("p",null,"In all cases the configuration is saved to the database on first run. Any subsequent changes require the db to be reset. For the default sqlite\ndb provider this can be done by deleting ",Object(o.b)("inlineCode",{parentName:"p"},"src/jetstream/console-database.db")),Object(o.b)("h4",{id:"configure-by-environment-variables-andor-config-file"},"Configure by Environment Variables and/or Config File"),Object(o.b)("p",null,"By default, the configuration in file ",Object(o.b)("inlineCode",{parentName:"p"},"src/jetstream/default.config.properties")," will be used. These can be changed by environment variables\nor an overrides file."),Object(o.b)("h5",{id:"environment-variable"},"Environment variable"),Object(o.b)("p",null,"If you wish to use a local user account, ensure you have set the following environment variables:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"AUTH_ENDPOINT_TYPE=local")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"LOCAL_USER")," - The username for the local user"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"LOCAL_USER_PASSWORD")," - The password for the local user"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"LOCAL_USER_SCOPE=stratos.admin")," - This gives the local user admin permissions. Currently other roles are not available.")),Object(o.b)("p",null,"If you have a custom uaa, ensure you have set the following environment variables:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"UAA_ENDPOINT"),"- the URL of your UAA",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"If you have an existing CF and want to use the same UAA use the ",Object(o.b)("inlineCode",{parentName:"li"},"authorization_endpoint")," value from ",Object(o.b)("inlineCode",{parentName:"li"},"[cf url]/v2/info"),"\nFor example for PCF Dev, use: ",Object(o.b)("inlineCode",{parentName:"li"},"UAA_ENDPOINT=https://login.local.pcfdev.io"),"."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"CONSOLE_CLIENT")," - the Client ID to use when authenticating against your UAA (defaults to: 'cf')"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"CONSOLE_CLIENT_SECRET")," - the Client ID to use when authenticating against your UAA (defaults to empty)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"CONSOLE_ADMIN_SCOPE")," - an existing UAA scope that will be used to identify users as ",Object(o.b)("inlineCode",{parentName:"li"},"Stratos Admins"))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"To use a pre-built Stratos UAA container execute ",Object(o.b)("inlineCode",{parentName:"p"},"docker run --name=uaa --rm -p 8080:8080 -P splatform/stratos-uaa"),". The UAA will be\navailable at ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost:8080")," with a ",Object(o.b)("inlineCode",{parentName:"p"},"CONSOLE_CLIENT")," value of ",Object(o.b)("inlineCode",{parentName:"p"},"console"))),Object(o.b)("h5",{id:"config-file"},"Config File"),Object(o.b)("p",null,"To easily persist configuration settings copy ",Object(o.b)("inlineCode",{parentName:"p"},"src/jetstream/default.config.properties")," to ",Object(o.b)("inlineCode",{parentName:"p"},"src/jetstream/config.properties"),". The backend will load its\nconfiguration from this file in preference to the default config file, if it exists. You can also modify individual configuration settings\nby setting the corresponding environment variable."),Object(o.b)("h5",{id:"to-configure-a-local-user-account-via-config-file"},"To configure a local user account via config file"),Object(o.b)("p",null,"In ",Object(o.b)("inlineCode",{parentName:"p"},"src/jetstream/config.properties")," uncomment the following lines:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"AUTH_ENDPOINT_TYPE=local\nLOCAL_USER=localuser\nLOCAL_USER_PASSWORD=localuserpass\nLOCAL_USER_SCOPE=stratos.admin\n")),Object(o.b)("p",null,"Load the Stratos UI and proceed to log in using the configured credentials."),Object(o.b)("h4",{id:"to-configure-uaa-via-stratos"},"To configure UAA via Stratos"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Go through the ",Object(o.b)("inlineCode",{parentName:"li"},"Config File")," step above and comment out the ",Object(o.b)("inlineCode",{parentName:"li"},"UAA_ENDPOINT")," with a ",Object(o.b)("inlineCode",{parentName:"li"},"#")," in the new ",Object(o.b)("inlineCode",{parentName:"li"},"config.properties")," file."),Object(o.b)("li",{parentName:"ol"},"If any previous configuration attempt has been made reset your database as described above."),Object(o.b)("li",{parentName:"ol"},"Continue these steps from ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#run"}),"Run"),".",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"You should see the line ",Object(o.b)("inlineCode",{parentName:"li"},"Will add setup route and middleware")," in the logs"))),Object(o.b)("li",{parentName:"ol"},"Load the Stratos UI as usual and you should be immediately directed to the setup wizard")),Object(o.b)("p",null,"The setup wizard that allows you to enter the values normally fetched from environment variables or files. The UI will assist you through\nthis process, validating that the UAA address and credentials are correct. It will also provide a list of possible scopes for the Stratos Admin"),Object(o.b)("h4",{id:"run"},"Run"),Object(o.b)("p",null,"Execute the following file from ",Object(o.b)("inlineCode",{parentName:"p"},"src/jetstream")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"jetstream\n")),Object(o.b)("p",null,"You should see the log as the backend starts up. You can press CTRL+C to stop the backend."),Object(o.b)("h4",{id:"automatically-register-and-connect-to-an-existing-endpoint"},"Automatically register and connect to an existing endpoint"),Object(o.b)("p",null,"To automatically register a Cloud Foundry add the environment variable/config setting below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"AUTO_REG_CF_URL=<api url of cf>\n")),Object(o.b)("p",null,"Jetstream will then attempt to auto-connect to it with the credentials supplied when logging into Stratos."),Object(o.b)("h4",{id:"running-jetstream-in-a-container"},"Running Jetstream in a container"),Object(o.b)("p",null,"We recommend running Stratos using the Docker All-In-One image."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Follow instructions in the deploy/all-in-one docs")))}s.isMDXComponent=!0},145:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),s=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=s(n),p=a,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||o;return n?i.a.createElement(m,r(r({ref:t},b),{},{components:n})):i.a.createElement(m,r({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var b=2;b<o;b++)l[b]=n[b];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);