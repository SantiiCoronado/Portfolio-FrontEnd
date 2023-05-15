import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/models/credentials';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Form:FormGroup;
  creds:Credentials={
    email:'',
    password:''
  };
  constructor(private formBuilder:FormBuilder, private loginService:LoginService, private router:Router) { 
    this.Form = this.formBuilder.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  login(){
    this.loginService.login(this.creds).subscribe(response =>{
      this.router.navigate(['']);
    },err=>{
      alert("Los datos que ingreso no son validos")
    })
  }

  ngOnInit(): void {
  }



  get Email(){
    return this.Form.get("email");
  }

  get Password(){
    return this.Form.get("password");
  }
}
