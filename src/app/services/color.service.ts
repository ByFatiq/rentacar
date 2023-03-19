import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Color } from '../models/color';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl = 'https://localhost:7050/api/Colors/getall';
  constructor(private _httpClient:HttpClient) { }


  getColors():Observable<ListResponseModel<Color>> {
    return this._httpClient.get<ListResponseModel<Color>>(this.apiUrl);
  }
}
