import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FormsModule } from "@angular/forms";


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    EmployeeListComponent
  ]
})
export class DepartmentModule { }
