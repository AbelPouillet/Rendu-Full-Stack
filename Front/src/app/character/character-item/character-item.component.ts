import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterItemAttribute, ICharacter } from '../character.model';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-item',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.scss']
})
export class CharacterItemComponent {
  @Input() item: ICharacter;
  @Output() attributeClick = new EventEmitter<CharacterItemAttribute>();
  @Output() deleteClick = new EventEmitter;

  CharacterItemAttribute = CharacterItemAttribute;
  constructor(private characterService: CharacterService, private router: Router) {

  }
  onAttributeClick(attribute: CharacterItemAttribute): void {
    this.attributeClick.emit(attribute);
  }
  delete() {
    this.characterService.delete(this.item._id).subscribe(() =>
    {
      this.deleteClick.emit();
    });
  }
}
