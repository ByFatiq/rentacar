import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';



@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl = 'https://localhost:7050/api/Brands/getall';
  constructor(private _httpClient:HttpClient) { }


  getBrands():Observable<ListResponseModel<Brand>> {
    return this._httpClient.get<ListResponseModel<Brand>>(this.apiUrl);
  }
}
