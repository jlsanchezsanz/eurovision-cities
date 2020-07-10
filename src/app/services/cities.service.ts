import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CitiesResponse } from '../models';

const ENDPOINT = 'http://localhost:1111/cities/queryByPage';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  constructor(private http: HttpClient) {}

  public getCities(page: number, size: number): Observable<CitiesResponse> {
    return this.http.get<CitiesResponse>(
      `${ENDPOINT}?page=${page}&size=${size}`
    );
  }
}
