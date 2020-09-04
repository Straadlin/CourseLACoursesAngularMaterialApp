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
  },
  {
    id: 2,
    name: 'NodeJS from 0',
    description: 'Angular is a Framework to web development...',
    speciality: 'angular',
    startDate: '2020/09/02',
    categories: ['web', 'angular', 'javascript'],
    isActive: true,
    level: 5
  },
  {
    id: 3,
    name: 'Angular Material from 0',
    description: 'TypeScript is a superset of JavaScript...',
    speciality: 'angular',
    startDate: '2020/09/02',
    categories: ['web', 'angular', 'javascript'],
    isActive: true,
    level: 3
  },
  {
    id: 4,
    name: 'C# from 0',
    description: 'Angular is a Framework to web development...',
    speciality: 'angular',
    startDate: '2020/09/02',
    categories: ['web', 'angular', 'javascript'],
    isActive: true,
    level: 5
  },
  {
    id: 5,
    name: 'SQL from 0',
    description: 'TypeScript is a superset of JavaScript...',
    speciality: 'angular',
    startDate: '2020/09/02',
    categories: ['web', 'angular', 'javascript'],
    isActive: true,
    level: 3
  },
  {
    id: 6,
    name: 'ASP.NET from 0',
    description: 'Angular is a Framework to web development...',
    speciality: 'angular',
    startDate: '2020/09/02',
    categories: ['web', 'angular', 'javascript'],
    isActive: true,
    level: 5
  },
  {
    id: 7,
    name: 'Go from 0',
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
