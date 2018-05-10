import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  tiles = [
    {text: 'One', cols: 1, rows: 1},
    {text: 'Two', cols: 1, rows: 1},
    {text: 'Three', cols: 1, rows: 1},
    {text: 'Four', cols: 1, rows: 1}
  ];
  constructor() { }

  ngOnInit() {
  }

}
