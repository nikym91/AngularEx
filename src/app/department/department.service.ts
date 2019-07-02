import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from './department';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  _url = "https://localhost:44313/api/departments";

  constructor(private http: HttpClient) { }

  getDepartment(id: number): Observable<Department> {
    return this.getDepartments().pipe(map((departments: Department[]) => departments.find(d => d.departmentId == id)))
  }

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this._url);
  }

  getDepartmentsByString(input: string): Observable<Department[]> {
    if(input == ""){
      return this.getDepartments();
    }
    else{
       return this.getDepartments().pipe(map((departments: Department[]) => departments.filter(d => d.name.toLowerCase().includes(input))));
    }
   
  }
}
