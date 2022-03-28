import { Employee } from './../models/employee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

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
}
