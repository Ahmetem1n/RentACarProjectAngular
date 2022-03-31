import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from './../models/responseModel';
import { SingleResponseModel } from './../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = 'https://localhost:44349/api/';

  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<ListResponseModel<User>> {
    let newPath = this.apiUrl + 'users/getall';
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }

  addUser(user: User): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'users/add';
    return this.httpClient.post<ResponseModel>(newPath, user);
  }

  updateUser(user: User): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'users/update';
    return this.httpClient.post<ResponseModel>(newPath, user);
  }
  deleteUser(user: User): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'users/delete';
    return this.httpClient.post<ResponseModel>(newPath, user);
  }

  detailUser(user: User) {
    let newPath = this.apiUrl + 'users/getById?userId' + user.userId;
    return this.httpClient.get<SingleResponseModel<User>>(newPath);
  }
}
