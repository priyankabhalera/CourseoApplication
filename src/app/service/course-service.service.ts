import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {
  constructor(private http : HttpClient) { }

  getCourses() 
  {
    return this.http.get('http://localhost:8080/courses');
  }
 
}
