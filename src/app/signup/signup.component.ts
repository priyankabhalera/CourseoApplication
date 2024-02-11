import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
  user = { 
   name : '',
   email : '',
   password : ''
  }
    constructor(private http : HttpClient,
                private router : Router){}
  ngOnInit(): void {
    this.signup();
  }

    signup()
    {
      let userData = {
        "fullName" : this.user.name,
        "email" : this.user.email,
        "password" : this.user.password
      };
      console.log(userData,"Hello");
      this.http.post("http://localhost:8080/users/signup" ,userData,{responseType:'text'})
    
      .subscribe((resultData : any)=>
      {
        console.log(resultData);
        alert("User Register Successfully");
        this.router.navigateByUrl('course');
      });
    
    }
  
  }
  
    
