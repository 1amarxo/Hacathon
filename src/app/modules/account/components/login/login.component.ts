import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { AccountFacadeService } from '../../services/account-facede.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  loginForm: UntypedFormGroup;

  description:string='';
  
  get email(){return this.loginForm.get('email')}
  get password(){return this.loginForm.get('password')}

  constructor(private accountFacade: AccountFacadeService, private router: Router) {
    this.loginForm = new UntypedFormGroup({
      email: new UntypedFormControl(null, [Validators.email, Validators.required]),
      password: new UntypedFormControl(null, [ Validators.required])
    })
  }
   
  async onSubmit(){
    try{
      await this.accountFacade.login(this.loginForm.value);
    }
    catch(error){
      // this.loginForm.reset();
      // let currentError = error as HttpErrorResponse;

      // if(currentError.status == 0) this.description = 'Server not found [404]';
      // else this.description = currentError.error;
    }
  }

}
