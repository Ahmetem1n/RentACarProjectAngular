import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Model } from '../models/model';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from './../models/responseModel';
import { SingleResponseModel } from './../models/singleResponseModel';

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

  addModel(model: Model): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'models/add';
    return this.httpClient.post<ResponseModel>(newPath, model);
  }

  updateModel(model: Model): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'models/update';
    return this.httpClient.post<ResponseModel>(newPath, model);
  }
  deleteModel(model: Model): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'models/delete';
    return this.httpClient.post<ResponseModel>(newPath, model);
  }

  detailModel(model: Model) {
    let newPath = this.apiUrl + 'models/getById?modelId' + model.modelId;
    return this.httpClient.get<SingleResponseModel<Model>>(newPath);
  }
}
