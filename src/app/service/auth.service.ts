import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../model/user';

const httpoptions = {
  headers: new HttpHeaders({'Content-type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private _router: Router) { }

  // apiUrl = 'http://192.168.1.103:8080/api';
  apiUrl = 'http://localhost:8080/api';

  loginUser(email:any,password:any):Observable<User[]>{
    return this.http.post<User[]>(this.apiUrl+'/login',{email, password}, httpoptions)
  }

  signup(data:any):Observable<User[]>{
    return this.http.post<User[]>(this.apiUrl+'/register', data)
  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/index'])
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

}
