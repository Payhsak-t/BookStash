import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Comment } from '../comment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class CommentService {

  constructor(private httpClient: HttpClient) { }

  saveComment(comment : Comment):Observable<any>{
    return this.httpClient.post('http://localhost:8084/comment/comments', comment);
  }

  deleteComment(commentId : String, userEmail : String):Observable<{}> {
    return this.httpClient.delete(`http://localhost:8084/comment/comments/${commentId}/${userEmail}`,httpOptions)
  }

  getAllComments(bookId : String):Observable<Array<Comment>>{
    return this.httpClient.get<Array<Comment>>(`http://localhost:8084/comment/getAll/${bookId}`);
  }
}
