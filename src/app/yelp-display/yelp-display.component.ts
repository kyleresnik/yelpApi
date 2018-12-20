import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../data.service'

@Component({
  selector: 'app-yelp-display',
  templateUrl: './yelp-display.component.html',
  styleUrls: ['./yelp-display.component.css']
})
export class YelpDisplayComponent implements OnInit {
  displayForm: FormGroup;
  public result: any[];
  city: string;
  state: string;

  constructor(
    private fb: FormBuilder,
    private ds: DataService
  ) { }

  ngOnInit() {
    this.displayForm = this.fb.group({
      price: new FormControl(),
      city: new FormControl(),
      state: new FormControl()
    })
  }

  submitSearch(): void {
    this.ds.fetchYelp(this.displayForm).subscribe(
      res => { console.log(res), this.result = res.businesses.city.value})
  }

}