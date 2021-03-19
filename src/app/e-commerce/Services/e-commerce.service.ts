import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ECommerceDataService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get('./assets/json_data/ecomm-data.json');
  }
}
