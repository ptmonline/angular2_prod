import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {RouterModule} from '@angular/router';

import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes.component';
import { AppComponent }   from './app.component';
import './rxjs-extensions';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      }
    ])
  ],
  declarations: [AppComponent, HeroDetailComponent, HeroesComponent],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

