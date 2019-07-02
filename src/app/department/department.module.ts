import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentListComponent } from './department-list/department-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    DepartmentListComponent,
    DepartmentDetailComponent
  ]
})
export class DepartmentModule { }
