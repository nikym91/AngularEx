import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  public departments = [];
  public inputValue: string;

  constructor(private _service: DepartmentService) { }

  ngOnInit() {
    this._service.getDepartments()
      .subscribe(data => {
        this.departments = data;
      });
  }

  onKey(event) {
    this.inputValue = event.target.value;
    this._service.getDepartmentsByString(this.inputValue.toLowerCase())
      .subscribe(data => {
        this.departments = data;
      });
  }

}
