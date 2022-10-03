import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const AUTH_API = 'http://localhost:8080/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

  constructor(
    private httpClient: HttpClient,
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {

  }

  login(username: string, password: string): Observable<any> {
    return this.httpClient.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.httpClient.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
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


  logout(): void {

  }
}
