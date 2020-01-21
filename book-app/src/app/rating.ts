export class Rating {
    id: string;
    bookId: string;
    userEmail: string;
    rating: number;
  
    constructor() {
      this.id = "";
      this.bookId = '';
      this.userEmail = '';
      this.rating = null;
    }
}