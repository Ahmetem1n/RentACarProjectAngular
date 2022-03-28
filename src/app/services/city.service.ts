import { City } from './../models/city';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  apiUrl = 'https://localhost:44349/api/';

  constructor(private httpClient: HttpClient) {}

  getCities(): Observable<ListResponseModel<City>> {
    let newPath = this.apiUrl + 'cities/getall';
    return this.httpClient.get<ListResponseModel<City>>(newPath);
  }
}
