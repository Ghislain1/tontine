import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {


  isLoggedIn = false;

  constructor(
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {

  }





  // Send email verfificaiton when new user sign up
  SendVerificationMail(): void {
    /*return this.afAuth.currentUser.sendEmailVerification()
      .then(() => {
        this.router.navigate(['verify-email-address']);
      }); */
  }

  // Reset Forggot password
  ForgotPassword() { }


  // Sign out
  SignOut() {

  }

  /* Setting up user data when sign in with username/password,
   sign up with username/password and sign in with social auth
   provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: any) {


  }

  // Sign in with Google
  GoogleAuth(): any {


  }

  // Auth logic to run auth providers
  AuthLogin() {

  }

  login() {

  }

  logout(): void {

  }
}
