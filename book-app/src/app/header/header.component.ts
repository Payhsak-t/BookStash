import { Component, OnInit } from '@angular/core';
import { RouterService } from '../service/router.service';
import { AuthenticationService } from '../service/authentication.service';
import { RegisterService } from '../service/register.service';
import { User } from '../user';
import { GoogleBookApiService } from '../service/google-book-api.service';
import { FormGroup, FormControl } from '@angular/forms';
// import 'bootstrap/dist/js/bootstrap.bundle';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User = new User();
  profileImage = "../../assets/user.jpg";
  searchForm: FormGroup;
  searchlist = [
    { name: 'By Title', value: 'intitle' }, { name: 'By Author', value: 'inauthor' }];
  default: string = 'intitle'
  genrelist = [
    { name: 'History', value: 'historical' },
    { name: 'Science', value: 'science' },
    { name: 'Biography', value: 'biography' },
    { name: 'Fiction', value: 'fiction' },
    { name: 'CookBooks', value: 'cookbook' },
    { name: 'Non Fiction', value: 'nonfiction' },
    { name: 'Memoir', value: 'memoir' },
    { name: 'Poetry', value: 'poetry' },
    { name: 'Horror', value: 'horror' },
    { name: 'Romance', value: 'romance' },
    { name: 'Fantasy', value: 'fantasy' },
    { name: 'Comics', value: 'comics' },
    { name: 'Classics', value: 'classic' },
    { name: 'Art', value: 'art' },
  ];
  constructor(private router: RouterService, private authService: AuthenticationService, private registerService: RegisterService, private googleBookApiService: GoogleBookApiService) {
    this.searchForm = new FormGroup({
      bookName: new FormControl(null),
      searchBy: new FormControl
    });
    this.searchForm.controls['searchBy'].setValue(this.default, { onlySelf: true });
  }
  ngOnInit() {
    // this.authService.isUserLoggedIn();
    if (sessionStorage.getItem("email") != null) {
      this.registerService.getUser(sessionStorage.getItem("email")).subscribe(data => {
        this.user.name = data.name;
        if(data.img != null) {
          this.profileImage = data.img;
        }
      });
    }
  }
  OnSearch() {
    this.googleBookApiService.SearchBooks(this.searchForm.get('bookName').value, this.searchForm.get('searchBy').value);
    this.searchForm.controls['bookName'].reset();
  }
  genreSearch(genre: string) {
    this.googleBookApiService.SearchBooksByGenre(genre, 'subject');
    console.log(genre);
    this.router.toHome();
  }
  logout() {
    sessionStorage.clear();
    this.authService.loggedIn = false;
    console.log(this.authService.loggedIn);
    this.router.toHome();
  }
}