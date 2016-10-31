import './rxjs-extensions';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component';
import { HeroService } from './services/hero.service';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { HeroSearchComponent } from './pages/hero-search/hero-search.component'

import { AppRoutingModule } from './routing/app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { HttpModule } from '@angular/http';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent,HeroSearchComponent],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

