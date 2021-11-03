import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  sub!: Subscription;
  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.sub = this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1,5));
  }
  ngOnInit(): void {
    this.getHeroes();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
