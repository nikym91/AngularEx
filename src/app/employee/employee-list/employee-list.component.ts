import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { DepartmentService } from 'src/app/department/department.service';
import { Department } from 'src/app/department/department';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  selectValue: number;
  inputValue: number;
  employees: Employee[];
  allDepartments: Department[];

  constructor(
    private _service: EmployeeService,
    private _depService: DepartmentService
    ) { }

  ngOnInit() {
    this._depService.getDepartments()
      .subscribe(data => {
        this.allDepartments = data;
    });

    this._service.getEmployees()
      .subscribe(data => {
        this.employees = data;
    });
  }

  toSelect(){
    this._service.getEmployeesByDepartmentId(this.selectValue)
      .subscribe(data => {
        this.employees = data;
    });
  }

  onKey(event) {
    this.inputValue = +event.target.value;
    if(isNaN(this.inputValue)){
      alert("Devi inserire un numero");
    }else{
      this._service.getEmployeesOlderThan(this.inputValue)
        .subscribe(data => {
          this.employees = data;
        })
    }
  }

}
