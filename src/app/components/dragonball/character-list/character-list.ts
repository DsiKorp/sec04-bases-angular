import { ChangeDetectionStrategy, Component, input } from '@angular/core';


@Component({
  selector: 'dragonball-character-list',
  imports: [],
  templateUrl: './character-list.html',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterList {
  listName = input.required<string>();
  characters = input.required<Character[]>();
}
