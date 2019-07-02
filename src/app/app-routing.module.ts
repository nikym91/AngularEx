import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { MasterPageComponent } from './master-page/master-page.component';
import { DepartmentDetailComponent } from './department/department-detail/department-detail.component';

const routes: Routes = [
  { path: "", component: MasterPageComponent },
  { path: "department-list", component: DepartmentListComponent},
  { path: "department-detail/:id", component: DepartmentDetailComponent},
  { path: "employee-list", component: EmployeeListComponent},
  { path: "**", component: MasterPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
