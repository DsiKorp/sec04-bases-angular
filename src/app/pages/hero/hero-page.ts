import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";


@Component({
  selector: 'app-hero',
  templateUrl: './hero-page.html',
  styleUrls: ['./hero-page.css'],
  imports: [UpperCasePipe],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroPage {

  name = signal('Ironman');
  age = signal(45);
  heroDescription = computed(() => `${this.name()} - ${this.age()} años`);
  capitalizedName = computed(() => this.name().toUpperCase());
  //capitalizedName = computed(() => this.name().toUpperCase());

  // getHeroDescription() {
  //   return `${this.name()} - ${this.age()} años`;
  // }

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(32);
  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }

  changeAge() {
    this.age.update(() => 60);
  }

}
