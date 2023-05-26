import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import jwt_decode from "jwt-decode";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient , private _Router:Router) {
    this.decode()
  }
  baseUrl:string = 'https://ecommerce.routemisr.com/api/v1/'


  userData:BehaviorSubject<any> = new BehaviorSubject(null)

  decode(){
    if (localStorage.getItem('uToken') !== null) {
      const decode = localStorage.getItem('uToken')!;
      const incode =  jwt_decode(decode);
      this.userData.next(incode);
      // this._Router.navigate(['/meals'])

    }
  }

  login(userData:any):Observable<any>
  {
    return this._HttpClient.post(`${this.baseUrl}auth/signin` , userData)

  }

  register(userData:any):Observable<any>
  {
    return this._HttpClient.post(`${this.baseUrl}auth/signup` , userData)
  }

  logout()
  {
    localStorage.removeItem('uToken');
    this.userData.next(null)
    this._Router.navigate(['/login'])
  }
}
