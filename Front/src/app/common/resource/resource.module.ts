import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CharacterResource } from './character/character.resource';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    CharacterResource
  ]
})
export class ResourceModule { }
