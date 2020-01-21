import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

    constructor(private router:Router) { }
    tologin()
    {
      this.router.navigate(['login']);
    }
    toHome()
    {
      this.router.navigate(['']);
    }
    toEdit() {
      this.router.navigate(['edit']);
    }
}
