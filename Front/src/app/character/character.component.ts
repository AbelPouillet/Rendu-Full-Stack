import { Component } from '@angular/core';
import { ICharacter } from './character.model';
import { CharacterService } from './character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
  providers: [
    CharacterService
  ]
})
export class CharacterComponent {

  items: ICharacter[] | undefined;

  constructor(
    private service: CharacterService) {
    this.initComponent();
  }

  private initComponent(): void {
    this.service.getItems().subscribe(
      characters => {
        this.items = characters;
      });
  }
  onDelete(){
    this.initComponent();
  }
}
