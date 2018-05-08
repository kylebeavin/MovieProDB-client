import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { Http } from '@angular/http';

const Api_Url = 'http://localhost:3000/api/users';

@Injectable()
export class AuthService {

  constructor( private _http: Http) { }

  register(regUserData: RegisterUser) {
    this._http.post(`${Api_Url}/register`, regUserData);
  }

}
