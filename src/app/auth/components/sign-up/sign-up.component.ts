import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  model;
  message;
  submitted = false;

  constructor() { }

  ngOnInit(): void {
    this.model = { id: 1000 };
  }

  onSubmit(): void {
    this.submitted = true;
    this.message = JSON.stringify(this.model);
  }

}
