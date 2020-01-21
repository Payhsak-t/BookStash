import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpBackend } from '@angular/common/http';
import 'rxjs/Rx';
import { Book } from '../book';

@Injectable()
export class GoogleBookApiService {

  bookone: Book;
  items: Array<Book>;
  ApiUri = encodeURI(`https://www.googleapis.com/books/v1/volumes/`);
  apiKey: string;

  constructor(private http: HttpClient, handler: HttpBackend) {
    this.bookone = new Book();
    this.http = new HttpClient(handler);
  }

  SearchBooks(search, searchBy) {
    console.log(searchBy);
    const encodedURI = encodeURI("https://www.googleapis.com/books/v1/volumes?q=+" + searchBy + ":" + search + "&maxResults=30")
    return this.http.get<any>(encodedURI).subscribe((data) => {
      this.items = [];
      var something = data.items;
      console.log(something);
      something.forEach(
        result => {
          this.bookone.id = result.id;
          this.bookone.title = result.volumeInfo.title;
          this.bookone.authors = result.volumeInfo.authors;
          this.bookone.smallThumbnail = result.volumeInfo.imageLinks.smallThumbnail;
          this.bookone.categories = result.volumeInfo.categories;
          this.bookone.description = result.volumeInfo.description;
          this.bookone.publisher = result.volumeInfo.publisher;
          this.bookone.publishedDate = result.volumeInfo.publishedDate;
          this.bookone.language = result.volumeInfo.language;
          this.bookone.averageRating = result.volumeInfo.averageRating;
          this.items.push(this.bookone);
          this.bookone = new Book();
        }
      );
    }
    );
  }



  async SearchOneBook(id: string) {
    let data = await this.http.get<any>(`${this.ApiUri}${id}?key=AIzaSyA6n1AG2yiUA5Wx9T5H3ebbGpxBNFGy1vo`).toPromise().then(result => {
      //  console.log(result);
      this.bookone.id = id;
      this.bookone.title = result.volumeInfo.title;
      this.bookone.authors = result.volumeInfo.authors;
      this.bookone.smallThumbnail = result.volumeInfo.imageLinks.smallThumbnail;
      this.bookone.categories = result.volumeInfo.categories;
      this.bookone.description = result.volumeInfo.description;
      this.bookone.publisher = result.volumeInfo.publisher;
      this.bookone.publishedDate = result.volumeInfo.publishedDate;
      this.bookone.language = result.volumeInfo.language;
      this.bookone.averageRating = result.volumeInfo.averageRating;
    })
  }

  SearchBooksByGenre(search, searchBy) {
    const encodedURI = encodeURI("https://www.googleapis.com/books/v1/volumes?q=+" + searchBy + ":" + search + "&orderBy=newest&maxResults=30")
    return this.http.get<any>(encodedURI).subscribe((data) => {
      console.log(data);
      this.items=[];
    data.items.forEach(
        result => {
          this.bookone.id = result.id;
          this.bookone.title = result.volumeInfo.title;
          this.bookone.authors = result.volumeInfo.authors;
          this.bookone.smallThumbnail = result.volumeInfo.imageLinks.smallThumbnail;
          this.bookone.categories = result.volumeInfo.categories;
          this.bookone.description = result.volumeInfo.description;
          this.bookone.publisher = result.volumeInfo.publisher;
          this.bookone.publishedDate = result.volumeInfo.publishedDate;
          this.bookone.language = result.volumeInfo.language;
          this.bookone.averageRating = result.volumeInfo.averageRating;
          this.items.push(this.bookone);
          this.bookone = new Book();
        }
      );
    }
    );
  }

}