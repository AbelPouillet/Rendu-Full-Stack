export interface ICharacter {
  _id: string;
  firstName: string;
  lastName: string;
  birthYear: number;
}

export enum CharacterItemAttribute {
  firstName = 'FIRST_NAME',
  lastName = 'LAST_NAME',
  birthYear = 'BIRTH_YEAR'
}
