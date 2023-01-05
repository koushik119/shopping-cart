import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from '../backend.service';
import { AppUser } from '../models/AppUsers';
import { UserService } from '../services/users/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm:FormGroup
  loggedInData:AppUser
  userMessage: string=''

  constructor(private formBuilder:FormBuilder, private userService:UserService,private router:Router) {
    this.loggedInData = {
      userName: '',
      password: ''
    };
    this.loginForm = formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]],
    });
  };

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl(''),
      password: new FormControl('')
    });
  }

  submitLogin=()=>{
    //   if (loginForm.userName.trim().length === 0) {
    //     this.errorMsg = "Username is required";
    //   } 
    //   else if (this.password.trim().length === 0) {
    //     this.errorMsg = "Password is required";
    //   } 
    //   else {
    //     this.errorMsg = "";
    //     let res = this.service.login(this.username, this.password);
    //     if (res === 200) {
    //       this.router.navigate(['home']);
    //     }
    //     if (res === 403) {
    //       this.errorMsg = "Invalid Credentials";
    //     }
    //   }
    //console.log(this.loginForm.value);
    this.userService.login(this.loginForm.value)
      .subscribe((resp) => {
        if (JSON.stringify(resp).length > 2) {
          this.loggedInData = JSON.parse(JSON.stringify(resp).substring(1, JSON.stringify(resp).length - 1));
          if (this.loggedInData.userName === this.loginForm.value.userName) {
            localStorage.setItem('appUser', this.loggedInData.userName);
            this.loginForm.reset();
            console.log('login', localStorage.getItem('appUser'));
            this.router.navigate(['home']);
          }
        }
        else {
          this.loginForm.reset();
          this.userMessage = 'Invalid credentials!';
        }
      });
  };
     
  
}


