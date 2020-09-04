import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/courses-manager/services/course.service';
import { Course } from 'src/app/courses-manager/models/course';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  //displayedColumns: string[] = ['id', 'name', 'description', 'speciality'];
  displayedColumns: string[] = ['name', 'description', 'speciality'];
  dataSource: Course[];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getCourses()
    .then(courses => this.dataSource = courses);
  }

}
