import { Component, OnInit } from '@angular/core';
import { GoogleBookApiService } from '../service/google-book-api.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { FaveService } from '../service/fave.service';
import { AuthenticationService } from '../service/authentication.service';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  bookone: Book;
  items: Array<Book>;
  faveArray: Array<string> = [];
  bookId: string;
  constructor(private googleBooksApiService: GoogleBookApiService, private route: ActivatedRoute, private faveService: FaveService, private authService: AuthenticationService) {
      this.items = [];
      this.bookone = new Book();
  }
  ngOnInit() {
    if (sessionStorage.getItem("email") != null) {
      this.faveService.getFaves(sessionStorage.getItem("email")).subscribe(data => {
        data.forEach(res => {
          this.bookId = res.bookId;
          this.faveArray.push(this.bookId);
        })
      });
    }

  }

}