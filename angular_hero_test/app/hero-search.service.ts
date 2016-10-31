import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Hero } from './hero';

@Injectable()
export class HeroSearchService {
    constructor(private http: Http) {

    }

    search(terms: string): Observable<Hero[]> {
        return this.http
            .get(`app/heroes/?name=${terms}`)
            .map((r: Response) => r.json().data as Hero[]);
    }
}
