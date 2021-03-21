import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { CharacterEditComponent } from './character-edit/character-edit.component';
import { CharacterItemComponent } from './character-item/character-item.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterComponent } from './character.component';

@NgModule({
  declarations: [
    CharacterComponent,
    CharacterItemComponent,
    CharacterListComponent,
    CharacterEditComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatChipsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  exports: [
    CharacterComponent
  ]
})
export class CharacterModule { }
