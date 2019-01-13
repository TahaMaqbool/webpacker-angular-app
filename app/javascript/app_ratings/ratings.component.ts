import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import templateString from './ratings.component.html'
import styleString from './ratings.component.scss';

@Component({
  selector: 'app_rating',
  template: templateString,
  styles: [ styleString ]
})
export class RatingsComponent implements OnInit {

  @Input() ratingCount: any;
  @Output() ratingChanged: EventEmitter<number> = new EventEmitter<number>();

  books: [];
  starList: boolean[] = [false, false, false, false, false];       // create a list which contains status of 5 stars
  name: any;
  rating: number;

  constructor(){
  }

  ngOnInit() {
      this.setInitialStars();
  }

  setStar(index: number) {
      this.rating = index + 1;
      for (let i = 0; i <= 4; i++) {
          (i <= index) ? this.starList[i] = false : this.starList[i] = true;
      }
      this.ratingChanged.emit(this.rating);
  }

  setInitialStars() {
    for(let i = this.ratingCount; i < 5; i++) {
      this.starList[i] = true;
    }
  }

}
