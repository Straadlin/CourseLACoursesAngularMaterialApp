import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';

import { TableComponent } from './table/table.component';
import { Table2Component } from './table2/table2.component';
import { TreeComponent } from './tree/tree.component';
import { MaterialModule } from '../material/material.module';
import { ButtonsComponent } from './buttons/buttons.component';


@NgModule({
  declarations: [
    TableComponent,
    Table2Component,
    TreeComponent,
    ButtonsComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    MaterialModule
  ]
})
export class DemoModule { }
