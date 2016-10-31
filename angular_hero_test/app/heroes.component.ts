import { Component } from '@angular/core';
import { Hero } from './hero';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: [ 'heroes.component.css' ],
  providers: [HeroService]

})
export class HeroesComponent {
  title: string = 'Tour of Heroes';
  selectedHero: Hero;
  public heroes: Hero[];

  constructor(private heroService: HeroService, private router: Router) {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);;
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  goToDetails(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}
