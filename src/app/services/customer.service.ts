import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from './../models/responseModel';
import { SingleResponseModel } from './../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrl = 'https://localhost:44349/api/';

  constructor(private httpClient: HttpClient) {}

  getCustomers(): Observable<ListResponseModel<Customer>> {
    let newPath = this.apiUrl + 'customers/getall';
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }

  addCustomer(customer: Customer): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'customers/add';
    return this.httpClient.post<ResponseModel>(newPath, customer);
  }

  updateCustomer(customer: Customer): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'customers/update';
    return this.httpClient.post<ResponseModel>(newPath, customer);
  }
  deleteCustomer(customer: Customer): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'customers/delete';
    return this.httpClient.post<ResponseModel>(newPath, customer);
  }

  detailCustomer(customerId: number) {
    let newPath = this.apiUrl + 'customers/getById?customerId=' + customerId;
    return this.httpClient.get<SingleResponseModel<Customer>>(newPath);
  }
}
