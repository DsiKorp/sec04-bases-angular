import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-dragonball-character-add',
  imports: [],
  templateUrl: './dragonball-character-add.html',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragonballCharacterAdd {

  name = signal('');
  power = signal(0);

  newCharacter = output<Character>();

  addCharacter() {
    console.log(this.name(), this.power());

    if (!this.name() || !this.power || this.power() <= 0) {
      return
    }

    const newCharacter: Character = {
      id: new Date().getTime(),//Math.max(...this.characters().map(c => c.id)) + 1,
      name: this.name(),
      power: this.power()
    }

    //this.characters.update(characters => [...characters, newCharacter]);
    console.log({ newCharacter });
    this.newCharacter.emit(newCharacter);

    this.resetFields();

    //console.log({ characters: this.characters() });
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
