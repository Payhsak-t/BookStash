export class Book {
    id: string;
    title: string;
    description: string;
    categories: string;
    authors: string;
    publisher: string;
    publishedDate: any;
    language: string;
    averageRating: any;
    smallThumbnail: string;
  
    constructor() {
      this.id = '';
      this.title = '';
      this.description = '';
      this.categories = '';
      this.authors = '';
      this.publisher = '';
      this.publishedDate = '';
      this.language = '';
      this.averageRating = '';
    }
  }