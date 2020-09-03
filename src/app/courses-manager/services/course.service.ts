import { Injectable } from '@angular/core';
import { Course } from '../models/course';

const data: Course[] = [
  {
    id: 0,
    name: 'Angular from 0',
    description: 'Angular is a Framework to web development...',
    speciality: 'angular',
    startDate: '2020/09/02',
    categories: ['web', 'angular', 'javascript'],
    isActive: true,
    level: 5
  },
  {
    id: 1,
    name: 'TypeScript from 0',
    description: 'TypeScript is a superset of JavaScript...',
    speciality: 'angular',
    startDate: '2020/09/02',
    categories: ['web', 'angular', 'javascript'],
    isActive: true,
    level: 3
  }
];

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }


  getCourses(): Promise<Course[]>{
    return new Promise((resolve, reject) => {
      resolve(data);
    });
  }
}
