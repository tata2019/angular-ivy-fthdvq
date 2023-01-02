import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travelinput',
  templateUrl: './travelinput.component.html',
  styleUrls: ['./travelinput.component.css'],
})
export class TravelinputComponent implements OnInit {
  title : string = 'Easy Travel';
  constructor() {}

  ngOnInit() {}
  getTravelDetail() {
    console.log('Show');
  }
  getClear() {
    console.log('Clear me');
  }
}
