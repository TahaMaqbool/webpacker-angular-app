import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BooksComponent } from './books.component';
import {RatingsModule} from "../app_ratings/ratings.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    BooksComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      RatingsModule
  ],
  providers: [],
  bootstrap: [BooksComponent]
})
export class BooksModule { }
