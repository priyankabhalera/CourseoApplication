import { Component } from '@angular/core';
import { CourseServiceService } from '../service/course-service.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
  
  title = 'CourseoApp';
  data: any ;
  constructor(private service : CourseServiceService){

    this.service.getCourses().subscribe(
    data=>{
      console.warn(data);
      this.data = data;
    }
    )
}
}


