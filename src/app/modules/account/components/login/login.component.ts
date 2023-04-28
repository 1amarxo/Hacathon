import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  loginForm: FormGroup;

  description:string='';
  
  get email(){return this.loginForm.get('email')}
  get password(){return this.loginForm.get('password')}

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [ Validators.required])
    })
  }
   
  async onSubmit(){
   
  }

}
