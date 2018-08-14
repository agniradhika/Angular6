import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css'],
  inputs:['parentData']
})
export class HeroDetailsComponent implements OnInit {
@Input('parentData') public hname;
  constructor() { }

  ngOnInit() {

  }

}
