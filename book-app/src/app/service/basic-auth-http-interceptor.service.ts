import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BasicAuthHttpInterceptorService implements HttpInterceptor {
  constructor(private auth: AuthenticationService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      let token =sessionStorage.getItem('token');
      console.log(token);
      if(token){
        req = req.clone({headers: req.headers.set('Authorization', `Bearer ${token}`)})
      }
 
      return next.handle(req);
  }
}