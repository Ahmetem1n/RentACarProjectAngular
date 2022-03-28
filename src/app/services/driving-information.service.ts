import { DrivingInformation } from './../models/drivingInformation';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class DrivingInformationService {
  apiUrl = 'https://localhost:44349/api/';

  constructor(private httpClient: HttpClient) {}

  getDrivingInformations(): Observable<ListResponseModel<DrivingInformation>> {
    let newPath = this.apiUrl + 'drivingInformations/getall';
    return this.httpClient.get<ListResponseModel<DrivingInformation>>(newPath);
  }
}
