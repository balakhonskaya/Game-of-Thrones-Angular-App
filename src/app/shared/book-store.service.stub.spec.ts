import { TestBed, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

import { Book } from '../shared/book';
import { BookStoreService } from './book-store.service';

describe('BookStoreService', () => {

  const expectedBooks = [
    {
      name: 'Book 1',
      authors: [],
      publisher: []
    },
    {
      name: 'Book 2',
      authors: [],
      publisher: []
    }
  ];

  let httpStub;

  beforeEach(() => {

    httpStub = {
      get: () => of(expectedBooks)
    };

    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: httpStub
        },
        BookStoreService
      ]
    });
  });

  it('should GET a list of all books',
    inject([BookStoreService],
      (service: BookStoreService) => {

      let receivedBooks: Book[];
      service.getAll().subscribe(b => receivedBooks = b);

      expect(receivedBooks.length).toBe(2);
      expect(receivedBooks[0].name).toBe('111');
      expect(receivedBooks[1].name).toBe('222');
    }));
});
