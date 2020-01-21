import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Recommend } from '../recommend';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RecommendService {
  recommendation: Array<any> = [];
  counts: Array<any> = [];
  countArray: any;
  recCount: Array<any> = [];
  i: number;
  constructor(private httpClient: HttpClient) { }

  saveRecommendation(recommend: Recommend): Observable<Object> {
    console.log(recommend);
    return this.httpClient.post('http://localhost:8080/recommend/save', recommend, ({ responseType: "text" }));
    //, ({ responseType: "text" })
  }
  getAllRecommendation() {
    this.httpClient.get<Array<Recommend>>(`http://localhost:8080/recommend/getAll`).subscribe(
      data => {
        this.recommendation = data;
      }
    );
  }
  getAllByUserId(userId: string): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/recommend/recommends/${userId}`);
  }
  unrecommend(recId: string): Observable<{}> {
    console.log("recID is:");
    console.log(recId);
    return this.httpClient.delete(`http://localhost:8080/recommend/unrecommend/${recId}`, httpOptions)
  }
  getRecommendationCount() {
    return this.httpClient.get<Array<Recommend>>(`http://localhost:8080/recommend/count`).subscribe(
      data => {
        console.log(data);
        this.recCount = data;
      }
    )
  }
  
  getByEmailId(emailId: string): Observable<any> {
    return this.httpClient.get<Array<Recommend>>(`http://localhost:8084/recommend/rec/${emailId}`);
  }
}