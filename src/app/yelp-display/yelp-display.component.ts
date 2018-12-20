import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../data.service'

@Component({
  selector: 'app-yelp-display',
  templateUrl: './yelp-display.component.html',
  styleUrls: ['./yelp-display.component.css']
})
export class YelpDisplayComponent implements OnInit {
  displayForm = new FormGroup({
    city: new FormControl(),
    price: new FormControl()
  })
  result: any;

  constructor(
    private fb: FormBuilder,
    private ds: DataService
  ) { }

  ngOnInit() {
    // this.displayForm = this.fb.group({
    //   price: new FormControl(),
    //   city: new FormControl()
    // })
  }

  submitSearch(): void {
    this.ds.fetchYelp(this.displayForm.value.city, this.displayForm.value.price).subscribe(
      res => { console.log(res), this.result = res.businesses[0].city.value})
  }

}