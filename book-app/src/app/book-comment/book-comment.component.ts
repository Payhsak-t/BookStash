import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../service/comment.service';
import { RouterService } from '../service/router.service';
import { Book } from '../book';
import { User } from '../user';
import { Comment } from '../comment';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GoogleBookApiService } from '../service/google-book-api.service';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-book-comment',
  templateUrl: './book-comment.component.html',
  styleUrls: ['./book-comment.component.css']
})
export class BookCommentComponent implements OnInit {
  @Input() bookone: Book;
  commentArray: Array<any> = [];

  email: string;
  commentArray2: Array<Comment> = [];
  comment: Comment = new Comment();

  user: User = new User();
  book: Book = new Book();
  currentUser : String;

  commentForm: FormGroup;
  id: string;

  constructor(private route: ActivatedRoute, private commentService: CommentService, private router: RouterService, private googleApiService: GoogleBookApiService, private authService: AuthenticationService) {
    this.commentForm = new FormGroup({
      commentBox: new FormControl(null, [Validators.required])
    });
  }

  async ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    await this.googleApiService.SearchOneBook(this.id);
    console.log(this.googleApiService.bookone.id);
    this.bookone = this.googleApiService.bookone;
    this.getAll();
    if (sessionStorage.getItem("email") !== null) {
      this.authService.loggedIn = true;
      this.currentUser = sessionStorage.getItem("email");
    }
  }

  saveComment() {
    if (sessionStorage.getItem("email") != null) {
      this.comment.userEmail = sessionStorage.getItem("email");
      this.comment.bookId = this.bookone.id;
      console.log(this.bookone.id);
      this.comment.comment = this.commentForm.value.commentBox;
      console.log(this.comment);
      this.commentService.saveComment(this.comment).subscribe(
        data => {
          this.getAll();
          console.log(data);
        },
        error => {
          console.log(error);

        });
      this.commentForm.reset();
    }
    else {
      this.router.tologin();
    }

  }

  getAll() {
    console.log(this.bookone.id);
    this.commentService.getAllComments(this.bookone.id).subscribe(data => {
      this.commentArray = data;
      console.log(this.commentArray);
    })
  }

  deleteComment(commentId: String, userEmail : String) {
    if (sessionStorage.getItem("email") !== null) {
      // if (sessionStorage.getItem("email") == this.comment.userEmail) {
        this.commentService.deleteComment(commentId, userEmail).subscribe(data => {
          console.log("Book deleted");
          this.getAll();
        })
      // }
    }
    else {
      this.router.tologin();
    }
  }

}
