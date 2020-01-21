import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
declare function initialize(bookid) : any;

@Component({
  selector: 'app-book-viewer',
  templateUrl: './book-viewer.component.html',
  styleUrls: ['./book-viewer.component.css']
})
export class BookViewerComponent implements OnInit {
  @Input() bookone: Book;
  clickEvent  = false;
  constructor() {
  }

  ngOnInit() {
  }
  onClick(bookid)
  {
    initialize(bookid);
  }
}
