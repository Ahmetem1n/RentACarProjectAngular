import { Card } from './../models/card';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  apiUrl = 'https://localhost:44349/api/';

  constructor(private httpClient: HttpClient) {}

  getCards(): Observable<ListResponseModel<Card>> {
    let newPath = this.apiUrl + 'cards/getall';
    return this.httpClient.get<ListResponseModel<Card>>(newPath);
  }
}
