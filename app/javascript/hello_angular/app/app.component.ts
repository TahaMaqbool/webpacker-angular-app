import { Component } from '@angular/core';
import templateString from './app.component.html'
import {HttpClient} from '@angular/common/http';
import styleString from './app.component.scss';

@Component({
  selector: 'hello-angular',
  template: templateString,
  styles: [ styleString ]
})
export class AppComponent {

  constructor(private http: HttpClient){}

  name = 'Angular!';

  changeName() {
        this.http.get('/hello_angular/name').subscribe(data => {
            this.name = data['name'];
        });
    }
}
