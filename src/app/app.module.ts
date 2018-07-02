import {BugsnagErrorHandler} from 'bugsnag-angular';
import {environment} from '../environments/environment';

import bugsnag from 'bugsnag-js';
import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AuthModule} from './auth/auth.module';
import {AdageModule} from './adages/adage.module';
import {FloatingButtonModule} from './floating-button/floating-button.module';
import {MatCardModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {AuthService} from './auth/auth.service';
import {AuthGuard} from './auth/auth.guard';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavButtonsComponent} from './nav-buttons/nav-buttons.component';
import {AdagesService} from './adages/services/adages.service';

const bugsnagClient = bugsnag(environment.bugsnag);

export function errorHandlerFactory() {
  return new BugsnagErrorHandler(bugsnagClient);
}

@NgModule({
  declarations: [
    AppComponent,
    NavButtonsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    AppRoutingModule,
    AdageModule,
    FloatingButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
  ],
  providers: [
    {provide: ErrorHandler, useFactory: errorHandlerFactory},
    AuthService,
    AuthGuard,
    AdagesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
