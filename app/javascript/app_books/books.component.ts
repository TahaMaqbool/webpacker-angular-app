import {Component, OnInit} from '@angular/core';
import templateString from './books.component.html'
import {HttpClient} from '@angular/common/http';
import styleString from './books.component.scss';

@Component({
  selector: 'app_books',
  template: templateString,
  styles: [ styleString ]
})
export class BooksComponent implements OnInit {

  books: [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getBooks()
  }

  getBooks() {
      this.http.get('/books/list').subscribe(data => {
          this.books = data['books'];
      });
  }

  updateRatings(book: any, rating: number) {
    this.http.put(`/books/${book.id}/update_ratings`, {rating: rating}).subscribe();
  }
}
