import { Component } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  data : any;
  constructor(private userService : UserService){
    this.userService.getAllUser().subscribe(
      data =>
       {console.warn(data);
      this.data = data;
    }
    )
  }

}
