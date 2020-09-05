import { Component, OnInit, ViewChild } from '@angular/core';
import { CourseService } from 'src/app/courses-manager/services/course.service';
import { Course } from 'src/app/courses-manager/models/course';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'description', 'speciality', 'edit'];
  //displayedColumns: string[] = ['name', 'description', 'speciality'];
  dataSource = new MatTableDataSource<Course>();

  @ViewChild(MatPaginator, {static: true})
  paginator: MatPaginator;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.courseService.getCourses()
    .then(courses => {
      this.dataSource.data = courses;
    });
  }

  applyFilter(text: string) {
    this.dataSource.filter = text.trim().toLocaleLowerCase();
  }
}
