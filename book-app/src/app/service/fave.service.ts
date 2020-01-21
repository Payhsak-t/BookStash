import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fave } from '../fave';

@Injectable({
  providedIn: 'root'
})
export class FaveService {
  added = false;

  private baseUrl = 'http://localhost:8083/favourites/fave';
  constructor(private httpClient: HttpClient) { }

  getFaves(email: string): Observable<Array<Fave>> {
    return this.httpClient.get<Array<Fave>>(`${this.baseUrl}/${email}`);
  }
  addFave(fave: Fave): Observable<any> {
    this.added = true;
    return this.httpClient.post(this.baseUrl, fave);
  }
  deleteFave(faveId: string): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${faveId}`);
  }
}
