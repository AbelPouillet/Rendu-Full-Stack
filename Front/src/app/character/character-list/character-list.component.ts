import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CharacterItemAttribute, ICharacter } from '../character.model';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent {
  @Input() items: ICharacter[] | undefined;
  @Output() delete = new EventEmitter;
  count: Record<CharacterItemAttribute, number> = {
    [CharacterItemAttribute.firstName]: 0,
    [CharacterItemAttribute.lastName]: 0,
    [CharacterItemAttribute.birthYear]: 0
  };
  CharacterItemAttribute = CharacterItemAttribute;

  itemAttributeClick(attribute: CharacterItemAttribute): void {
    this.count[attribute]++;
  }
  onDelete(){
    this.delete.emit();
  }
}
