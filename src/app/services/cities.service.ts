import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CitiesResponse } from '../models';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  constructor(private http: HttpClient) {}

  public getCities(page: number, size: number): Observable<CitiesResponse> {
    return this.http.get<CitiesResponse>(
      `${environment.citiesEndpoint}?page=${page}&size=${size}`
    );
  }
}
