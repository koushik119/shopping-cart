import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  signUpForm:FormGroup

  constructor() {
    this.signUpForm = new FormGroup({});
  };

  loggedInData = {
    userName: '',
    password: ''
  };

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      userName: new FormControl(''),
      password: new FormControl('')
    });
  }

  register=()=>{
    this.loggedInData = this.signUpForm.value;
    console.log(this.signUpForm.value);
  }
}
