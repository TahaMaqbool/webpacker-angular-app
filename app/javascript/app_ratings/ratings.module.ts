import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RatingsComponent } from './ratings.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
      RatingsComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule
  ],
  exports: [RatingsComponent],
  providers: [],
  bootstrap: [RatingsComponent]
})
export class RatingsModule { }
