import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICharacterDto } from './character.dto';

@Injectable()
export class CharacterResource {

  private url = 'http://localhost:3000/characters';

  constructor(
    private http: HttpClient
  ) {
  }

  findAll(): Observable<ICharacterDto[]> {
    return this.http.get<ICharacterDto[]>(this.url);
  }

  create(dto: ICharacterDto): Observable<ICharacterDto> {
    return this.http.post<ICharacterDto>(this.url, dto);
  }

  update(dto: ICharacterDto): Observable<ICharacterDto> {
    return this.http.put<ICharacterDto>(this.url+'/'+dto._id, dto);
  }

  delete(id: string) {
    let fullUrl = this.url+'/'+id;
    return this.http.delete<ICharacterDto>(fullUrl);
  }
}
