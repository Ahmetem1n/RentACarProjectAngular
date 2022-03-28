import { PhoneNumber } from './../models/phoneNumber';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class PhoneNumberService {
  apiUrl = 'https://localhost:44349/api/';

  constructor(private httpClient: HttpClient) {}

  getPhoneNumbers(): Observable<ListResponseModel<PhoneNumber>> {
    let newPath = this.apiUrl + 'phoneNumbers/getall';
    return this.httpClient.get<ListResponseModel<PhoneNumber>>(newPath);
  }
}
