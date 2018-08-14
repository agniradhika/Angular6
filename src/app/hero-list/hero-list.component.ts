import { Component, OnInit, Input } from '@angular/core';
import {HeroService} from '../hero.service';
@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
hero;
message;
heroName = "";
  constructor(private heroService : HeroService) { }

  ngOnInit() {
    console.log("you are in init");
    console.log(this.heroService.heroes);
    this.hero = this.heroService.heroes;
  }
  displayAll(x){

    this.message="hey you are in displayAll method \t"+x+"\tIs your clicked superhero";
  }
addHero(){
  console.log("in addHero", this.heroName);
  this.hero.push(this.heroName);
  console.log(this.hero);
}
}
