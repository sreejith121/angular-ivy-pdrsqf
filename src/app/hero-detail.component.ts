import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Hero } from './hero';
@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent implements OnChanges {
  @Input() hero: Hero;

  // Use ngOnChanges to detect the name of the old hero
  public oldHero = 'No one';

  ngOnChanges(changes: SimpleChanges) {
    // if (changes.hero.previousValue && changes.hero.previousValue.name !== changes.hero.currentValue.name) {
    //   oldHero = changes.hero.previousValue.name;
    // }

    if (changes.hero.previousValue) {
      // console.log('Old hero is: ', changes.hero.previousValue.name);
      this.oldHero = changes.hero.previousValue.name;
    }
  }
}
