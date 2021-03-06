import { usernameValidator } from './username.validators';
import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
form = new FormGroup({
  username:new FormControl('',
    Validators.required,
  usernameValidator.shouldBeUnique),
  password:new FormControl('',Validators.required)
});

login(){
  this.form.setErrors({
    invalidLogin: true
  });
}

get username() {
  return this.form.get('username');

}

get password() {
  return this.form.get('password');
}

}
