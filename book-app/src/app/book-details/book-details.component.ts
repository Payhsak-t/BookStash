import { Component, OnInit, Input, Inject  } from '@angular/core';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';
import { GoogleBookApiService } from '../service/google-book-api.service';
import { User } from '../user';
import { Recommend } from '../recommend';
import { RecommendService } from '../service/recommend.service';
import { RouterService } from '../service/router.service';
import { CommentService } from '../service/comment.service';
import { Fave } from '../fave';
import { FaveService } from '../service/fave.service';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material';
import { StarRatingComponent } from 'ng-starrating';
import { Rating } from '../rating';
import { RatingService } from '../service/rating.service';



@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  id: string;
  bookone: Book = new Book();
  recommendArray: Array<any> = [];
  email: string;
  recommendArray2: any;
  recommend: Recommend = new Recommend();
  obj: any;
  i: number;
  user: User = new User();
  hideRec: boolean = false;
  fave: Fave = new Fave();

  userId: string;
  userEmail: string;
  // books: Recommend = new Recommend();
  recommendArray1: Array<Recommend> = [];
  recommends1: Array<any> = [];

  recommends: Array<any> = [];
  recommendation: Array<any> = [];
  recommendation1: Array<any> = [];
  xUserId: any;
  xemail: any;
  xBookId: any;

  commentArray: Array<any> = [];
  constructor(private route: ActivatedRoute, private googleApiService: GoogleBookApiService, private recommendService: RecommendService, private router: RouterService, private commentService: CommentService, private faveService: FaveService, public dialog: MatDialog) {
  }

  async ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    await this.googleApiService.SearchOneBook(this.id);
    console.log(this.googleApiService.bookone.id);
    this.bookone = this.googleApiService.bookone;
  }
  getAllRecommend() {
    this.recommendService.getRecommendationCount();
  }


  saveRecommend() {
    this.getAllRecommend();
    for (this.i = 0; this.i < this.recommendation.length; this.i++) {
      this.xemail = this.recommendation[this.i]['email']
      this.xBookId = this.recommendation[this.i]['bookId']
      if (this.xBookId === this.bookone.id && this.xemail === sessionStorage.getItem("email")) {
        console.log("inside");
        alert("Book already Recommended By You");
        //console.log(this.user);
      }
    } if (sessionStorage.getItem("email") !== null) {
      this.hideRec = true;
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
          alert("Book Recommended Successfully!")
        },
        error => {
          console.log(error);
          alert("You've Already Recommended This Book ")
        });
    }
    else {
      alert("Please Login First!")
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

  openDialog(bookId): any {
    if (sessionStorage.getItem("email") !== null) {
      const dialogRef = this.dialog.open(BookDetailsRatingComponent, {
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

  selector: 'book-details-rating.component, ngbd-rating-template',
  templateUrl: 'book-details-rating.component.html',
})

export class BookDetailsRatingComponent {
  rating: Rating = new Rating();
  ratingArray: Array<any> = [];
  // book: Book = new Book();

  constructor(
    public dialogRef: MatDialogRef<BookDetailsRatingComponent>, private ratingService: RatingService, @Inject(MAT_DIALOG_DATA) public data: any) {
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
