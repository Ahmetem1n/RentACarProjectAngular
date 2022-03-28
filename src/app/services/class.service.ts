import { Class } from './../models/class';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class ClassService {
  apiUrl = 'https://localhost:44349/api/';

  constructor(private httpClient: HttpClient) {}

  getClasses(): Observable<ListResponseModel<Class>> {
    let newPath = this.apiUrl + 'classes/getall';
    return this.httpClient.get<ListResponseModel<Class>>(newPath);
  }
}
