import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';





@Injectable({
  providedIn: 'root'
})
export class CarService {
apiUrl = 'https://localhost:7050/api/Cars/getall';
  constructor(private _httpClient:HttpClient) { }


  getCars():Observable<ListResponseModel<Car>> {
    return this._httpClient.get<ListResponseModel<Car>>(this.apiUrl);
  }
}
