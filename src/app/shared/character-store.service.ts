import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Character } from './character';

@Injectable({
  providedIn: 'root'
})
export class CharacterStoreService {
  private api  = 'https://cors-anywhere.herokuapp.com/'+'anapioficeandfire.com/api';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Character[]> {
    return this.http.get<any[]>(`${this.api}/characters`);
  }

  getSingle(index: string): Observable<Character> {
    return this.http.get<any>(
      //`${this.api}${URL}`
      `${this.api}/characters/${index}`
    );
  }

  remove(index: string): Observable<any> {
    return this.http.delete(
      `${this.api}/characters/${index}`,
      { responseType: 'text' }
    );
  }

}
