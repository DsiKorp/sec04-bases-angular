import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-dragonball',
  imports: [
    // NgClass
  ],
  templateUrl: './dragonball-page.html'
})
export class Dragonball {
  name = signal('Gohan');
  power = signal(100);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9000 },
    { id: 2, name: 'Vegeta', power: 8000 },
    { id: 3, name: 'AstroBot', power: 3000 },
    { id: 4, name: 'Yancha', power: 500 },
    { id: 5, name: 'Piccolo', power: 3000 },
  ]);

  powerClasses = computed(() => {
    return {
      "text-danger": this.power() > 8000,
      "text-primary": this.power() <= 8000
    };
  });

}
