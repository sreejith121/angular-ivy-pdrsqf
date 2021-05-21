import { Hero } from './hero';
@Component({
  selector: 'hero-detail',
  template: `
  <p style='background-color: yellow;'> The child component(hero-detail.component.ts) displays the details 
  of the passed hero object and the old hero name using ngOnChanges lifecycle method.
  </p>
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
      <br>
      <div> Old Hero was: {{oldHero}} </div>
    </div>
  `
})
export class HeroDetailComponent implements OnChanges {

  @Input() hero: Hero;
  
  // Use ngOnChanges to detect the name of the old hero
  private oldHero = "No one";
  
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

