import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Branch } from '../models/branch';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from './../models/responseModel';
import { SingleResponseModel } from './../models/singleResponseModel';

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

  addBranch(branch: Branch): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'branchs/add';
    return this.httpClient.post<ResponseModel>(newPath, branch);
  }

  updateBranch(branch: Branch): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'branchs/update';
    return this.httpClient.post<ResponseModel>(newPath, branch);
  }
  deleteBranch(branch: Branch): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'branchs/delete';
    return this.httpClient.post<ResponseModel>(newPath, branch);
  }

  detailBranch(branch: Branch) {
    let newPath = this.apiUrl + 'branchs/getById?branchId' + branch.branchId;
    return this.httpClient.get<SingleResponseModel<Branch>>(newPath);
  }
}
