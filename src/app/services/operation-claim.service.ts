import { OperationClaim } from './../models/operationClaim';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class OperationClaimService {
  apiUrl = 'https://localhost:44349/api/';

  constructor(private httpClient: HttpClient) {}

  getOperationClaims(): Observable<ListResponseModel<OperationClaim>> {
    let newPath = this.apiUrl + 'operationClaims/getall';
    return this.httpClient.get<ListResponseModel<OperationClaim>>(newPath);
  }
}
