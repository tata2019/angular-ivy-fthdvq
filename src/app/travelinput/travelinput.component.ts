import { Component, OnInit } from '@angular/core';
import {COUNTRIES} from '../mock-country';
import {Country} from '../Country';

@Component({
  selector: 'app-travelinput',
  templateUrl: './travelinput.component.html',
  styleUrls: ['./travelinput.component.css'],
})
export class TravelinputComponent implements OnInit {
  title : string = 'Easy Travel';
  countries: Country[] = COUNTRIES;

  
  constructor() {}

  ngOnInit() {}
  getTravelDetail() {
    console.log('Show');
  }
  getClear() {
    console.log('Clear me');
  }
}
