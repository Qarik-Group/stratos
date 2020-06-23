import { Validators } from '@angular/forms';

import {
  CredentialsAuthFormComponent,
} from '../../core/src/features/endpoints/connect-endpoint-dialog/auth-forms/credentials-auth-form.component';
import {
  NoneAuthFormComponent,
} from '../../core/src/features/endpoints/connect-endpoint-dialog/auth-forms/none-auth-form.component';
import {
  SSOAuthFormComponent,
} from '../../core/src/features/endpoints/connect-endpoint-dialog/auth-forms/sso-auth-form.component';
import { EndpointAuthTypeNames } from '../../core/src/features/endpoints/endpoint-helpers';
import { EndpointAuthTypeConfig, EndpointType } from './extension-types';

export abstract class BaseEndpointAuth {
  static readonly UsernamePassword = {
    name: 'Username and Password',
    value: EndpointAuthTypeNames.CREDS,
    form: {
      username: ['', Validators.required],
      password: ['', Validators.required],
    },
    types: new Array<EndpointType>(),
    component: CredentialsAuthFormComponent
  } as EndpointAuthTypeConfig;

  static readonly SSO = {
    name: 'Single Sign-On (SSO)',
    value: EndpointAuthTypeNames.SSO,
    form: {},
    types: new Array<EndpointType>(),
    component: SSOAuthFormComponent
  } as EndpointAuthTypeConfig;

  static readonly None = {
    name: 'No Authentication',
    value: EndpointAuthTypeNames.NONE,
    form: {},
    types: new Array<EndpointType>(),
    component: NoneAuthFormComponent
  } as EndpointAuthTypeConfig;
}