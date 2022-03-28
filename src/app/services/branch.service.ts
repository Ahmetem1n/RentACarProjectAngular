import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Branch } from './../models/branch';

@Injectable({
  providedIn: 'root',
})
export class BranchService {
  apiUrl = 'https://localhost:44349/api/';

  constructor(private httpClient: HttpClient) {}

  getBranchs(): Observable<ListResponseModel<Branch>> {
    let newPath = this.apiUrl + 'branchs/getall';
    return this.httpClient.get<ListResponseModel<Branch>>(newPath);
  }
}
