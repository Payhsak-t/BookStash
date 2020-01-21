import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Rating } from '../rating';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private httpClient: HttpClient) { }
  saveRating(rating : Rating):Observable<any>{
    return this.httpClient.post('http://localhost:8081/rating/ratings', rating);
  }

  updateRating(id : String, rating : Rating, userEmail : String):Observable<{}> {
    return this.httpClient.put(`http://localhost:8081/rating/ratings/${id}/${userEmail}`,httpOptions)
  }

  getAllRatings(bookId : String):Observable<Array<Rating>>{
    return this.httpClient.get<Array<Rating>>(`http://localhost:8081/rating/getAll/${bookId}`);
  }
}
