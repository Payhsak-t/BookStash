export class Comment {
  id: string;
  bookId: string;
  userEmail: string;
  comment: string;

  constructor() {
    this.id = "";
    this.bookId = '';
    this.userEmail = '';
    this.comment = '';
  }
}