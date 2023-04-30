import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountFacadeService } from '../../services/account-facede.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {
  registerForm: FormGroup;

  description: string = '';

  get email() { return this.registerForm.get('email'); }
  get firstName() { return this.registerForm.get('firstName'); }
  get lastName() { return this.registerForm.get('lastName'); }
  get password() { return this.registerForm.get('password'); }

  constructor(private accountFacade: AccountFacadeService,
              private router: Router) {
    this.registerForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      password: new FormControl(null,[Validators.required])
    })
  }
  async onSubmit() {
    try{
      await this.accountFacade.register(this.registerForm.value);
    } catch (error) {
      this.registerForm.reset();
      let currentError = error as HttpErrorResponse;

      if(currentError.status == 0) this.description = 'Server not found [404]';
      else this.description = currentError.error;
    }
  }

}
