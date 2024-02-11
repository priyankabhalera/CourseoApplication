import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from 'express';
import { Observable } from 'rxjs';

interface User {
  id: number;
  name: string;
  email: string;
  // Add other user properties as needed
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private signupUrl = "http://localhost:8080/users/signup";
private loginUrl = "http://localhost:8080/users/login";
  constructor(private http : HttpClient,
              private router : Router) { }

              signup(user: User): Observable<User> {
    {
      return this.http.post<User>(this.signupUrl, user);
    }    
  }
    // loginUser(user)
    // {
    //   return this.http.post<any>(this.loginUrl,user);
    // }      
    // logout()
    // {
    //    localStorage.removeItem('token');
    //    this.router.navigate(['/event']);
    // }
    // getToken()
    // {
    //   return localStorage.getItem('token');
    // }
}
