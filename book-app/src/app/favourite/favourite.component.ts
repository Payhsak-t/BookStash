import { Component, OnInit } from '@angular/core';
import { FaveService } from '../service/fave.service';
import { Fave } from '../fave';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  email: string;
  faves: Array<Fave> = [];
  constructor(private faveService: FaveService, private authService: AuthenticationService) { 
    
  }

  ngOnInit() {
    this.authService.isUserAuthenticated().then(authenticated => {
      if (sessionStorage.getItem('email') != null) {
        this.email = sessionStorage.getItem('email');
        this.fetchAllFavourites();
      }
    });
  }


  fetchAllFavourites() {
    this.faveService.getFaves(this.email).subscribe(
      data => {
        this.faves = data;
      });
    console.log(this.faves);
  }


  removeFromFavourite(bookId: string) {
    this.faveService.deleteFave(bookId).subscribe(
      data => {
        this.fetchAllFavourites();
      }
    );
  }

}
