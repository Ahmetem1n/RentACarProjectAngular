import { UserOperationClaim } from './../models/userOperationClaim';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class UserOperationClaimService {
  apiUrl = 'https://localhost:44349/api/';

  constructor(private httpClient: HttpClient) {}

  getUserOperationClaims(): Observable<ListResponseModel<UserOperationClaim>> {
    let newPath = this.apiUrl + 'userOperationClaims/getall';
    return this.httpClient.get<ListResponseModel<UserOperationClaim>>(newPath);
  }
}
