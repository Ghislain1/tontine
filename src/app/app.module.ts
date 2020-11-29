import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DropdownModule, IconsModule, MDBBootstrapModule } from 'angular-bootstrap-md';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LandingModule } from './landing/landing.module';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';

import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment.prod';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(), // Bootstrap
    DropdownModule.forRoot(),
    AppRoutingModule,
    SharedModule, // To Display Header
    CoreModule, // for About, contact,
    AngularFireModule.initializeApp(
      environment.production ? environment.firebaseConfig : environment.firebaseConfig), // for Cloud FireStore to  Console App
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
