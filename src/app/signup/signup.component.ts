import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppUser } from '../models/AppUsers'; 
import { UserService } from '../services/users/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{
  signUpForm:FormGroup
  userMessage:string=''
  registerData: AppUser;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.registerData = {
      userName: '',
      password: ''
    };
    this.signUpForm = formBuilder.group({
      userName: ['', Validators.required, Validators.minLength(6), Validators.maxLength(32)],
      password: ['', Validators.required, Validators.minLength(6), Validators.maxLength(32)],
    });
  }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      userName: new FormControl(''),
      password: new FormControl('')
    });
  }

  submitRegister=()=>{
    this.registerData = this.signUpForm.value;
    console.log(this.signUpForm.value);
    this.userService.findByUserName(this.signUpForm.value.userName)
      .subscribe((resp) => {
        if (JSON.stringify(resp).length > 2) {
          let temp = JSON.parse(JSON.stringify(resp).substring(1, JSON.stringify(resp).length - 1));
          if (temp.userName === this.signUpForm.value.userName) {
            this.userMessage = 'Username already exists!';
            this.signUpForm.reset();
          }
        }
        else {
          this.userService.register(this.signUpForm.value)
            .subscribe((resp) => {
              console.log(resp.valueOf());
              alert(`${this.signUpForm.value.userName} registered successfully! Please login now.`);
              this.signUpForm.reset();
              this.router.navigate(['login']);
            });
        }
      });
  };
  
}
