import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { text } from 'stream/consumers';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http : HttpClient) { }

  // signup()
  // {
  //   let userData = {
  //     "fullName" : this.fullName,
  //     "email" : this.email,
  //     "password" : this.password
  //   };
  //   return this.http.post("http://localhost:8080/users/signup" ,userData,{responseType:'text'});
  // }
}
