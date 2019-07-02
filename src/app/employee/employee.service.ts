import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs';
import { map, distinct } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  _url = "https://localhost:44313/api/employees";
  year = new Date().getFullYear();
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this._url);
  }

  getEmployeesByDepartmentId(id: number): Observable<Employee[]> {
    return this.getEmployees().pipe(
      map((employee: Employee[]) => employee.filter(e => e.departmentId == id))
    );
  }

  getEmployeesOlderThan(age: number): Observable<Employee[]> {
    return this.getEmployees().pipe(
      map((employee: Employee[]) => employee.filter(e => {
        let yearOfBirth = new Date(e.dateOfBirth).getFullYear();
        return (this.year - yearOfBirth) >= age
      }))
    )
  }
}
