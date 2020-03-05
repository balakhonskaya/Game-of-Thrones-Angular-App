import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { House } from './house';

@Injectable({
  providedIn: 'root'
})
export class HouseStoreService {
  private api  = 'https://cors-anywhere.herokuapp.com/'+'anapioficeandfire.com/api';

  constructor(private http: HttpClient) {}

  getAll(): Observable<House[]> {
    return this.http.get<any[]>(`${this.api}/houses`);
  }

  getSingle(index: string): Observable<House> {
    return this.http.get<any>(
      //`${this.api}${URL}`
      `${this.api}/houses/${index}`
    );
  }

  remove(index: string): Observable<any> {
    return this.http.delete(
      `${this.api}/houses/${index}`,
      { responseType: 'text' }
    );
  }

}
