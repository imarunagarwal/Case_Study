import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ECommerceDataService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get('./assets/json_data/ecomm-data.json');
  }
}
