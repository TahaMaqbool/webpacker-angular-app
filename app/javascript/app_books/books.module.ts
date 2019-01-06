import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BooksComponent } from './books.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    BooksComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule
  ],
  providers: [],
  bootstrap: [BooksComponent]
})
export class BooksModule { }
