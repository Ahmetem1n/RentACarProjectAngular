import { IdentityInformation } from '../models/identityInformation';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class IdentityInformationService {
  apiUrl = 'https://localhost:44349/api/';

  constructor(private httpClient: HttpClient) {}

  getIdentityInformations(): Observable<
    ListResponseModel<IdentityInformation>
  > {
    let newPath = this.apiUrl + 'identityInformations/getall';
    return this.httpClient.get<ListResponseModel<IdentityInformation>>(newPath);
  }
}
