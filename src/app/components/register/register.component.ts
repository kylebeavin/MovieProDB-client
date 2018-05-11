import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Input() dontShow: boolean;

  private _registerForm: FormGroup;

  constructor(private _form: FormBuilder, private _authService: AuthService) { }

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
    console.log(this._registerForm.value);
    this._authService.register(this._registerForm.value);
  }

}
