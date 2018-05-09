import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { HttpClient } from '@angular/common/http';
import { WSAEUSERS } from 'constants';
import { userInfo } from 'os';

const Api_Url = 'http://localhost:3000/api/users';



@Injectable()
export class AuthService {

  constructor(private _http: HttpClient) { }

  register(regUserData: RegisterUser) {
    this._http.post(`${Api_Url}/register`, {'user': regUserData})
      .subscribe(res => {
        
        localStorage.setItem('token', JSON.stringify(res.sessionToken))
      })
  }
}