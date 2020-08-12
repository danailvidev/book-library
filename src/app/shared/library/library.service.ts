import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Book } from './book';

@Injectable({ providedIn: 'root' })
export class LibraryService {
  private readonly endpoint = '/library';

  constructor(public http: HttpClient) {}

  public create(request: Book): Observable<Book> {
    return this.http.post<Book>(this.endpoint, request);
  }

  public update(id: string, request: Book): Observable<Book> {
    return this.http.patch<Book>(`${this.endpoint}/${id}`, request);
  }

  public delete(id: string): Observable<Book> {
    return this.http.delete<Book>(`${this.endpoint}/${id}`);
  }

  public fetchLatest(params?: HttpParams): Observable<Book[]> {
    return this.http.get<Book[]>(this.endpoint, { params: params });
  }
}
