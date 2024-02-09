import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email : string = "";
  password : string = "";
  constructor(private http : HttpClient,
              private router : Router){}
  login()
  {
    let loginData = {
    "email" :  this.email,
    "password" : this.password
    };

    this.http.post("http://localhost:8080/users/login",loginData).subscribe
                          ((resultData : any)=> {console.log(resultData);
      if(resultData.message == "Invalid email")
      {
        alert("Email not exists");
      }
      else if(resultData.message == "Invalid password")
      {
        alert("Password not exists");
      }
      else{
        this.router.navigateByUrl('home');
      }
        }    )                    
  }

}
