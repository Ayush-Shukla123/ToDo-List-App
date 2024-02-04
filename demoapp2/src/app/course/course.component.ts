import { Component } from '@angular/core';
import { CoursesService } from '../course.service';

@Component({
  selector: 'courses',
  template: `
  <h2>{{ getTitle() }}</h2>
  <ul>
  <li *ngFor="let course of courses">
  {{course}}
  </li>
  </ul>
  `,
  styleUrl: './course.component.css'
})
export class CourseComponent {

  title = 'List of courses';
  // courses = ["Course1","Course2"];
  courses;

  constructor( service : CoursesService) {  //dependncy injection
    // let service = new CoursesService();
    this.courses = service.getCourses();
  }
  getTitle(){
    return this.title;
  }

}
