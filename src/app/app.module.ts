import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { YelpDisplayComponent } from './yelp-display/yelp-display.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    YelpDisplayComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
