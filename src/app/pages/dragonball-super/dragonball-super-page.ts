import { DragonballService } from './../../services/dragonball.service';
import { NgClass } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { DragonballCharacterAdd } from "../../components/dragonball/dragonball-character-add/dragonball-character-add";

@Component({
  selector: 'app-dragonball-super',
  imports: [
    CharacterList,
    DragonballCharacterAdd
  ],
  templateUrl: './dragonball-super-page.html'
})
export class DragonballSuper {

  // Forma vieja
  // constructor(
  //   public DragonballService: DragonballService
  // ) { }

  // Forma nueva
  public dragonballService = inject(DragonballService);


}
