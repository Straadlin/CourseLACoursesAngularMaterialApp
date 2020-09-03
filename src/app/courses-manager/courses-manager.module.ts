import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesManagerRoutingModule } from './courses-manager-routing.module';
import { CoursesManagerComponent } from './courses-manager.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MaterialModule } from '../material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CourseAddComponent } from './components/course-add/course-add.component';
import { FormsModule } from '@angular/forms';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CardsComponent } from './components/course-list/cards/cards.component';
import { LisComponent } from './components/course-list/lis/lis.component';
import { TreeComponent } from './components/course-list/tree/tree.component';


@NgModule({
  declarations: [CoursesManagerComponent, SidenavComponent, ToolbarComponent, CourseAddComponent, CourseListComponent, CardsComponent, LisComponent, TreeComponent],
  imports: [
    CommonModule,
    CoursesManagerRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class CoursesManagerModule { }
