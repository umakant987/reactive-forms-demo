import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  form = new FormGroup({
    account : new FormGroup({
      username : new FormControl('', [
        Validators.required, 
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace,
        UsernameValidators.shouldBeUnique
      ]),
      password : new FormControl('', Validators.required)
    })
  });

  get username(){
    return this.form.get('account.username');
  }

  get password(){
    return this.form.get('account.password');
  }

  login(){
    this.form.setErrors({
      invalidLogin: true
    });
  }

}
