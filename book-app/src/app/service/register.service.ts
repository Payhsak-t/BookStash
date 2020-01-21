import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseUrl = 'http://localhost:8085/user/users';
  constructor(private httpClient: HttpClient) { }

  getUser(id: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }
  createUser(user: User): Observable<any> {
    return this.httpClient.post(this.baseUrl, user);
  }
  deleteUser(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
  updateUser(id: string, user: User): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, user);
  }

  updatePassword(id: string, password: String): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/password/${id}`, password);
  }
}
