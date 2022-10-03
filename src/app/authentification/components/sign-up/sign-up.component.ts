import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../services/authentification.service';
// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-sign-up',
  // templateUrl: './sign-up.component.html',
  template: '<button (click)="auth.loginWithRedirect()">Log in</button>',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authentificationService: AuthentificationService,
    public auth: AuthService// Inject the authentication service into your component through the constructor
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, email, password } = this.form;

    this.authentificationService.register(username, email, password).subscribe({
      next: data => {
        console.warn(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}
