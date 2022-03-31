import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from './../models/responseModel';
import { SingleResponseModel } from './../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  apiUrl = 'https://localhost:44349/api/';

  constructor(private httpClient: HttpClient) {}

  getAdmins(): Observable<ListResponseModel<Admin>> {
    let newPath = this.apiUrl + 'admins/getall';
    return this.httpClient.get<ListResponseModel<Admin>>(newPath);
  }

  addAdmin(admin: Admin): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'admins/add';
    return this.httpClient.post<ResponseModel>(newPath, admin);
  }

  updateAdmin(admin: Admin): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'admins/update';
    return this.httpClient.post<ResponseModel>(newPath, admin);
  }
  deleteAdmin(admin: Admin): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'admins/delete';
    return this.httpClient.post<ResponseModel>(newPath, admin);
  }

  detailAdmin(admin: Admin) {
    let newPath = this.apiUrl + 'admins/getById?adminId' + admin.adminId;
    return this.httpClient.get<SingleResponseModel<Admin>>(newPath);
  }
}
