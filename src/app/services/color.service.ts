import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from './../models/responseModel';
import { SingleResponseModel } from './../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  apiUrl = 'https://localhost:44349/api/';

  constructor(private httpClient: HttpClient) {}

  getColors(): Observable<ListResponseModel<Color>> {
    let newPath = this.apiUrl + 'colors/getall';
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }

  addColor(color: Color): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'colors/add';
    return this.httpClient.post<ResponseModel>(newPath, color);
  }

  updateColor(color: Color): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'colors/update';
    return this.httpClient.post<ResponseModel>(newPath, color);
  }
  deleteColor(color: Color): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'colors/delete';
    return this.httpClient.post<ResponseModel>(newPath, color);
  }

  detailColor(colorId: number) {
    let newPath = this.apiUrl + 'colors/getById?colorId=' + colorId;
    return this.httpClient.get<SingleResponseModel<Color>>(newPath);
  }
}
