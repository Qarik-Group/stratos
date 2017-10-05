import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AuthGuardService } from './auth-guard.service';
import { EventWatcherService } from './event-watcher/event-watcher.service';
import { MDAppModule } from './md.module';
import { PageHeaderService } from './page-header-service/page-header.service';
import { WindowRef } from './window-ref/window-ref.service';

@NgModule({
  imports: [
    MDAppModule
  ],
  exports: [
    BrowserModule,
    MDAppModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    AuthGuardService,
    PageHeaderService,
    EventWatcherService,
    WindowRef
  ]
})
export class CoreModule { }
