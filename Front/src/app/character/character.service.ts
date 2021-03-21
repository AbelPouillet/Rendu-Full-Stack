import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICharacterDto } from '../common/resource/character/character.dto';
import { CharacterResource } from '../common/resource/character/character.resource';
import { ICharacter } from './character.model';

@Injectable()
export class CharacterService {

  constructor(
    private characterResource: CharacterResource
  ) {
  }

  getItems(): Observable<ICharacter[]> {
    return this.characterResource.findAll()
      .pipe(
        map((dtos: ICharacterDto[]) => dtos.map(dto => this.dtoToModel(dto)))
      );
  }

  save(character: ICharacter): Observable<ICharacter> {
    const characterDto = this.modelToDto(character);
    return this.characterResource.create(characterDto)
      .pipe(
        map(dto => this.dtoToModel(dto))
      );
  }

  update(character: ICharacter): Observable<ICharacter> {
    const characterDto = this.modelToDto(character);
    return this.characterResource.update(characterDto)
      .pipe(
        map(dto => this.dtoToModel(dto))
      );
  }

  delete(id: string) {
    return this.characterResource.delete(id);
  }

  private dtoToModel(dto: ICharacterDto): ICharacter {
    return {
      _id: dto._id,
      firstName: dto.firstName,
      lastName: dto.lastName,
      birthYear: moment().subtract(dto.age, 'year').year()
    };
  }

  private modelToDto(model: ICharacter): ICharacterDto {
    return {
      _id: model._id,
      firstName: model.firstName,
      lastName: model.lastName,
      age: moment().year() - model.birthYear
    };
  }
}
