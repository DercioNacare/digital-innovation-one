import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: Course[] = [];

  constructor() { }

  ngOnInit(): void {
    this.courses = [
      {code: 1,duration:120, imageUrl:'', name: 'Introdução ao Angular',price: 100 ,rating:4.5, releaseDate: 'June, 16, 2021'},
      {code: 2,duration:120, imageUrl:'', name: 'Lógica de programação',price: 100 ,rating:5.0, releaseDate: 'January, 30, 2021'},
      {code: 3,duration:120, imageUrl:'', name: 'Spring Rest',price: 100 ,rating:4.4, releaseDate: 'September, 27, 2021'}
    ];
  }

}
