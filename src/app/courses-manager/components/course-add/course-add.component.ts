import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course';
import { Category } from '../../models/category';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {

  course: Course = {};
  categories: Category[] = [
    {
      name: 'Angular',
      checked: false,
    },
    {
      name: 'JavaScript',
      checked: false,
    },
    {
      name: 'Web',
      checked: false,
    },
    {
      name: 'Mobile',
      checked: false,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  save(){
    this.course.categories = this.categories
      .filter(c => c.checked)
      .map(c=>c.name);

    console.log('Course', this.course);
  }
}
