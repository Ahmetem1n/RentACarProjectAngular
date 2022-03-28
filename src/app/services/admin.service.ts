import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin';
import { ListResponseModel } from '../models/listResponseModel';

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
}
