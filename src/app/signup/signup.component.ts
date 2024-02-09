import { Component } from '@angular/core';
import { SignupService} from '../service/signup.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  fullName : string = "";
  email : string ="";
  password : string = "";

  constructor(private http : HttpClient){}
  signup()
  {
    let userData = {
      "fullName" : this.fullName,
      "email" : this.email,
      "password" : this.password
    };
    this.http.post("http://localhost:8080/users/signup" ,userData,{responseType:'text'})
  
    .subscribe((resultData : any)=>
    {
      console.log(resultData);
      alert("User Register Successfully");
    });
  
  }

}
