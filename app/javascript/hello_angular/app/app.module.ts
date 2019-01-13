import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import {BooksComponent} from "../../app_books/books.component";
import {RouterModule} from "@angular/router";
import { RatingsModule } from "../../app_ratings/ratings.module";

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
      RatingsModule,
      RouterModule.forRoot(
          [
              { path: "books", component: BooksComponent}
          ]
      ),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
