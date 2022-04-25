import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from './../models/responseModel';
import { SingleResponseModel } from './../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  apiUrl = 'https://localhost:44349/api/';

  constructor(private httpClient: HttpClient) {}

  getEmployees(): Observable<ListResponseModel<Employee>> {
    let newPath = this.apiUrl + 'employees/getall';
    return this.httpClient.get<ListResponseModel<Employee>>(newPath);
  }

  addEmployee(employee: Employee): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'employees/add';
    return this.httpClient.post<ResponseModel>(newPath, employee);
  }

  updateEmployee(employee: Employee): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'employees/update';
    return this.httpClient.post<ResponseModel>(newPath, employee);
  }
  deleteEmployee(employee: Employee): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'employees/delete';
    return this.httpClient.post<ResponseModel>(newPath, employee);
  }

  detailEmployee(employeeId: number) {
    let newPath = this.apiUrl + 'employees/getById?employeeId=' + employeeId;
    return this.httpClient.get<SingleResponseModel<Employee>>(newPath);
  }
}
