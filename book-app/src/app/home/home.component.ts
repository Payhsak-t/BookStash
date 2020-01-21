import { Component, OnInit } from '@angular/core';
import { GoogleBookApiService } from '../service/google-book-api.service';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { AuthenticationService } from '../service/authentication.service';
import { RecommendService } from '../service/recommend.service';
import { Recommend } from '../recommend';
import { User } from '../user';
import { RegisterService } from '../service/register.service';
import { Book } from '../book';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchForm: FormGroup;
  item: boolean = false;
  searchlist = [
    { name: 'By Title', value: 'intitle' }, { name: 'By Author', value: 'inauthor' }, { name: 'By Genre', value: 'subject' }];
  default: string = 'intitle'

  recommendArray1: Array<Recommend> = [];
  recommends1: Array<any> = [];
  recommendArray: Array<Recommend> = [];
  i: number;
  recommendation1: Array<any> = [];
  counts: Array<any> = [];
  emailId: string;
  genre: string;
  genres: string;
  genreArray: Array<string> = [];
  genreList: Array<Book> = [];

  constructor(private googleBookApiService: GoogleBookApiService, private authService: AuthenticationService, private recommendService: RecommendService, private registerService: RegisterService) {
    this.searchForm = new FormGroup({
      bookName: new FormControl(null, [Validators.required]),
      searchBy: new FormControl
    });
    this.searchForm.controls['searchBy'].setValue(this.default, { onlySelf: true });
  }

  OnSearch() {
    this.googleBookApiService.SearchBooks(this.searchForm.get('bookName').value, this.searchForm.get('searchBy').value);
    this.searchForm.controls['bookName'].reset();
    this.item = true;

  }

  ngOnInit() {
}
}
