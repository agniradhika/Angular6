import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero.service';
@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
hero;
  constructor(private heroService : HeroService) { }

  ngOnInit() {
    console.log(this.heroService.heroes);
    this.hero = this.heroService.heroes;
  }

}
