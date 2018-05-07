import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private _registerForm: FormGroup;

  constructor(private _form: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this._registerForm = this._form.group({
      firstName: new FormControl,
      lastName: new FormControl,
      email: new FormControl,
      username: new FormControl,
      password: new FormControl,
      company: new FormControl,
      title: new FormControl,
      userType: new FormControl,
      regStatus: new FormControl
    })
  }

  onSubmit() {
    console.log(this._registerForm);
  }

}
