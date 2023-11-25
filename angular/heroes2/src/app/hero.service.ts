import { Injectable } from '@angular/core';
import { HEROES } from './heroes/mocks/mock-heroes';
import { Hero } from './IHero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Hero[] {
    return HEROES
  }
}
