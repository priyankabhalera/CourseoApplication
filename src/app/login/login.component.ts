import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'console';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email = "";
  password = "";
  constructor(private http: HttpClient,
    private router: Router) { }
  login() {
    let loginData = {
      "email": this.email,
      "password": this.password
    };

    const res = this.http.post("http://localhost:8080/users/login", loginData).subscribe
      ((resultData: any) => {
        console.log(resultData, "hello");

        if (resultData.value !== undefined) {
          alert("You have successfully logged in");
        }
        // else if(resultData.error.message === "Invalid password")
        // {
        //   alert("Password not exists");
        // }
        else {
          alert("Password not exists");
          // this.router.navigateByUrl('');

          // alert("You have successfully logged in")

        }
      },(error)=>{
        alert("Password not exists");
      })
  
  }

}
