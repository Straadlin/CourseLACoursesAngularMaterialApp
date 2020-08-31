import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesManagerRoutingModule } from './courses-manager-routing.module';
import { CoursesManagerComponent } from './courses-manager.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [CoursesManagerComponent, SidenavComponent],
  imports: [
    CommonModule,
    CoursesManagerRoutingModule,
    MaterialModule
  ]
})
export class CoursesManagerModule { }
