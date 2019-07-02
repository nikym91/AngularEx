import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { MasterPageComponent } from './master-page/master-page.component';
import { DepartmentModule } from './department/department.module';
import { DepartmentService } from './department/department.service';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employee/employee.service';
import { FormsModule } from "@angular/forms";


@NgModule({
   declarations: [
      AppComponent,
      EmployeeListComponent,
      MasterPageComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      DepartmentModule,
      HttpClientModule,
      FormsModule

   ],
   providers: [
     DepartmentService,
     EmployeeService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
