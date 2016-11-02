import { Component } from '@angular/core';
import { Hero } from '../../hero';
import { HeroService } from '../../services/hero.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent {
    heroesArray: Hero[] = [];

    constructor(private heroService: HeroService, private router: Router) { }

    ngOnInit(): void {
        this.heroService.getHeroes().then(heroes => this.heroesArray = heroes.slice(1, 5));
    }

    goToDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}