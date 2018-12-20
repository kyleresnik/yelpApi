import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    // 'Access-Control-Allow-Origin': '*',
    'Authorization': 'Bearer 0GzVR2iJPBuPDEPhgaqJa-wW6ICjav_LNTc657Zbg7TeDN_lOI8qLAK5jPFZo9tGQN_E12wca52tcCWYq5X9QpxWnXH8pTxsH16-4dycfcQMCzCwgCz-ow4sVbYaXHYx'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  yelpUrl = 'https://api.yelp.com/v3/businesses/search'

  constructor(private _http: HttpClient) { }

  fetchYelp(search): Observable<any> {
    console.log(search)
    return this._http.get(
      `https://cors-anywhere.herokuapp.com/${this.yelpUrl}?term=restaurants&location=${city},${state}&price=${price}`, httpOptions)
  }
}
