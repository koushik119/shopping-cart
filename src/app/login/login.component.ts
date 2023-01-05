import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm:FormGroup

  constructor(private service:BackendService,private router:Router) {
    this.loginForm = new FormGroup({});
  };

  loggedInData = {
    userName: '',
    password: ''
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
      console.log(this.loginForm.value)
     }
  
}


