import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Book } from './book';
import { Character} from './character';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
  private api  = 'https://cors-anywhere.herokuapp.com/'+'anapioficeandfire.com/api';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Book[]> {
    return this.http.get<any[]>(`${this.api}/books`);
  }

  getSingle(index: string): Observable<Book> {
    return this.http.get<any>(
      //`${this.api}${URL}`
      `${this.api}/books/${index}`
    );
  }

  remove(index: string): Observable<any> {
    return this.http.delete(
      `${this.api}/books/${index}`,
      { responseType: 'text' }
    );
  }


}
