import { effect, Injectable, signal } from '@angular/core';

const loadFromLocalStorage = (): Character[] => {
  const data = localStorage.getItem('dragonball_characters');
  return data ? JSON.parse(data) : [];
}

@Injectable({ providedIn: 'root' })
export class DragonballService {

  characters = signal<Character[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    console.log(`Characters count: ${this.characters().length}`);
    localStorage.setItem('dragonball_characters', JSON.stringify(this.characters()));
  });

  addCharacter(character: Character) {
    this.characters.update(characters => [...characters, character]);
  }

}
