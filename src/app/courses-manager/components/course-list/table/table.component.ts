import { Component, OnInit, ViewChild } from '@angular/core';
import { CourseService } from 'src/app/courses-manager/services/course.service';
import { Course } from 'src/app/courses-manager/models/course';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { CourseEditComponent } from '../../course-edit/course-edit.component';

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

  constructor(private courseService: CourseService,
    private dialog: MatDialog) { }

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

  edit(course: Course) {
    console.log('Edit', course);
    this.openDialog(course);
  }

  openDialog(course: Course) {
    const dialogRef = this.dialog.open(CourseEditComponent, {
      width: '600px',
      data: course
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!result){
        console.log('Dialog was closed.');
      }

      course =  result;
    });
  }
}
