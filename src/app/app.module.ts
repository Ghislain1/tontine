import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

import { environment } from 'src/environments/environment.prod';
import { AuthenticationModule } from './authentification/authentification.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule, // To Display Header
    CoreModule, // for About, contact,
    AuthenticationModule, // internal module, for signin  and signup
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-tc8-kv9j.us.auth0.com',
      clientId: 'XFwzWkCQZPKy3WKRqtuXD0lzXNHbjVh5'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
