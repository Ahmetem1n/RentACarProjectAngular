import { Model } from './../models/model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class ModelService {
  apiUrl = 'https://localhost:44349/api/';

  constructor(private httpClient: HttpClient) {}

  getModels(): Observable<ListResponseModel<Model>> {
    let newPath = this.apiUrl + 'models/getall';
    return this.httpClient.get<ListResponseModel<Model>>(newPath);
  }
}
