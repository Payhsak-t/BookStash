import { Component, OnInit, Input, Inject } from '@angular/core';
import { Book } from '../book';
import { RecommendService } from '../service/recommend.service';
import { Recommend } from '../recommend';
import { RouterService } from '../service/router.service';
// import { error } from '@angular/compiler/src/util';
import { User } from '../user';
import { Fave } from '../fave';
import { FaveService } from '../service/fave.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material';
import { StarRatingComponent } from 'ng-starrating';
import { Rating } from '../rating';
import { RatingService } from '../service/rating.service';
import { GoogleBookApiService } from '../service/google-book-api.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
  @Input() bookone: Book;
  @Input() faveArray: Array<string>;
  recommendArray: Array<any> = [];

  recommends: Array<any> = [];
  recommendation: Array<any> = [];
  email: string;
  recommendArray2: any;
  recommend: Recommend = new Recommend();
  obj: any;
  i: number;
  fave: Fave = new Fave();
  user: User = new User();
  item: boolean;

  userEmail: string;
  xemail: any;
  xBookId: any;
  added = false;
  constructor(private recommendService: RecommendService, private router: RouterService, private faveService: FaveService, public dialog: MatDialog, private googleApiService: GoogleBookApiService) { }


  ngOnInit() {
  }

  getFavourites(): boolean {
    this.faveArray.forEach(result => {
      if (result == this.bookone.id) {
        this.item = true;
      }
    })
    return this.item;
  }

  saveRecommend() {
    for (this.i = 0; this.i < this.recommendation.length; this.i++) {
      this.xemail = this.recommendation[this.i]['email']
      this.xBookId = this.recommendation[this.i]['bookId']
      if (this.xBookId === this.bookone.id && this.xemail === sessionStorage.getItem("email")) {
        console.log("inside");

        alert("Book already Recommended By You");
        //console.log(this.user);
      }
    }
    if (sessionStorage.getItem("email") !== null) {
      this.recommend.email = sessionStorage.getItem("email");
      this.recommend.title = this.bookone.title;
      this.recommend.authors = this.bookone.authors[0];
      this.recommend.recId = 'recId Default';
      this.recommend.userId = '';
      this.recommend.name = '';
      this.recommend.bookId = this.bookone.id;
      // console.log(this.recommend.email);
      console.log(this.recommend.bookId);
      console.log(this.recommend.userId);
      console.log(this.recommend.name);
      console.log(this.recommend.authors);
      this.recommend.smallThumbnail = this.bookone.smallThumbnail;
      this.recommendService.saveRecommendation(this.recommend).subscribe(
        data => {
          console.log("Added to recommendation");
          console.log(data);
          this.recommendService.getRecommendationCount();
          alert("Added To Recommendation")
        },
        error => {
          console.log(error);
          alert("You've Already Recommended This Book!")
        });
    }
    else {
      this.router.tologin();
    }
  }

  addToFavourite(id: String) {
    if (sessionStorage.getItem("email") !== null) {
      this.fave.email = sessionStorage.getItem("email");
      console.log(this.fave.email);
      this.fave.bookId = this.bookone.id;
      this.fave.authors = this.bookone.authors.toString();
      this.fave.smallThumbnail = this.bookone.smallThumbnail;
      this.fave.title = this.bookone.title;
      this.faveService.addFave(this.fave).subscribe(data => console.log(this.fave));
    }
    else
      this.router.tologin();
  }

  removeFromFavourite(bookId: string) {
    this.faveService.deleteFave(bookId).subscribe(
      data => {
      }
    );
  }

  openDialog(bookId): any {
    if (sessionStorage.getItem("email") !== null) {
      const dialogRef = this.dialog.open(BookCardRatingComponent, {
        width: '300px',
        data: { res: bookId }
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');

      });
    } else {
      this.router.tologin();
    }
  }
}

@Component({

  selector: 'book-card-rating.component, ngbd-rating-template',
  templateUrl: 'book-card-rating.component.html',
})

export class BookCardRatingComponent {
  rating: Rating = new Rating();
  ratingArray: Array<any> = [];
  // book: Book = new Book();

  constructor(
    public dialogRef: MatDialogRef<BookCardRatingComponent>, private ratingService: RatingService, @Inject(MAT_DIALOG_DATA) public data: any) {
  }
  onRate($event: { oldValue: number, newValue: number, starRating: StarRatingComponent }) {

    alert(`Old Value:${$event.oldValue}, 
        New Value: ${$event.newValue}, 
        Checked Color: ${$event.starRating.checkedcolor}, 
        Unchecked Color: ${$event.starRating.uncheckedcolor}`);
    if (sessionStorage.getItem("email") != null) {
      // if ($event.newValue == 0) {
      this.rating.userEmail = sessionStorage.getItem("email");
      console.log(this.data);
      this.rating.bookId = this.data.res;
      this.rating.rating = $event.newValue;
      console.log(this.rating);
      this.ratingService.saveRating(this.rating).subscribe(
        data => {
          // this.getAll();
          // console.log(data);
        },
        error => {
          console.log(error);
        });
    }
  }

}
  // getAll() {
  //   console.log(this.rating.bookId);
  //   this.ratingService.getAllRatings(this.rating.bookId).subscribe(data => {
  //     this.ratingArray = data;
  //     this.ratingArray.forEach => {

  //     });
  //     console.log(this.ratingArray);
  //   })
  // }
