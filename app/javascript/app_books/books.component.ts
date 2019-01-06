import {Component} from '@angular/core';
import templateString from './books.component.html'
import {HttpClient} from '@angular/common/http';
import styleString from './books.component.scss';

@Component({
  selector: 'app_books',
  template: templateString,
  styles: [ styleString ]
})
export class BooksComponent {

  constructor(private http: HttpClient){
    console.log('called');
  }


}
