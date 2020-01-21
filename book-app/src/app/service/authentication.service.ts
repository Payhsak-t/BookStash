import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { routes } from '../app.module';
import { Router } from '@angular/router';
import { RouterService } from './router.service';
import { resolve } from 'url';
import { reject } from 'q';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user: User = new User();
  constructor(private httpClient: HttpClient, private router: RouterService) { }

  loggedIn = false;


  authenticate(email, password) {
    return this.httpClient.post<any>('http://localhost:8082/users/authenticate', { email, password }).pipe(
      map(
        userData => {
          sessionStorage.setItem('email', email);
          let tokenStr = 'Bearer ' + userData.token;
          sessionStorage.setItem('token', tokenStr);
          return userData;
        }
      )
    );
  }

  isAuthenticated() {
    if (sessionStorage.getItem("email") !== null) {
      return true;
    } else {
      return false;
    }
  }

  isUserAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      if (sessionStorage.getItem("email")) {
        console.log("yes");
        resolve(true);
      } else {
        reject(false);
      }
    });
    return promise;
  }

  logOut() {
    sessionStorage.removeItem('email');
    this.loggedIn = false;
  }
}

