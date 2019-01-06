import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import {BooksComponent} from "../../app_books/books.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
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
