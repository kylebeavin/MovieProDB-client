import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { LoginUser } from '../models/LoginUser';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const Api_Url = 'http://localhost:3000/api/users';



@Injectable()
export class AuthService {

  constructor(private _http: HttpClient, private _router: Router) { }

  register(regUserData: RegisterUser) {
    this._http.post(`${Api_Url}/register`, {'user': regUserData})
      .subscribe(res => {
        const userData: any = res;
        localStorage.setItem('token', userData.sessionToken)
        this._router.navigate(['/create'])
      })
  }

  login(logUser: LoginUser) {
    this._http.post(`${Api_Url}/login`, {'user': logUser})
      .subscribe(res => {
        const loginInfo: any = res;
        localStorage.setItem('token', loginInfo.sessionToken)
        this._router.navigate(['/create'])
      })
  }

  logout() {
    localStorage.clear();
  }

}