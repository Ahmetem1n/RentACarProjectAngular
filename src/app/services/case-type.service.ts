import { CaseType } from './../models/caseType';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CaseTypeService {
  apiUrl = 'https://localhost:44349/api/';

  constructor(private httpClient: HttpClient) {}

  getCaseTypes(): Observable<ListResponseModel<CaseType>> {
    let newPath = this.apiUrl + 'caseTypes/getall';
    return this.httpClient.get<ListResponseModel<CaseType>>(newPath);
  }
}
