import { PrimaryKeyError } from '../common/error/repository-error.model';
import { ICharacter } from './character.model';
import Character from './character.schema';

export const findAll = (): Promise<ICharacter[]> => {
  return Character.find().then();
};

export const get = (id: string) => {
  return Character.findOne({ _id: id }).then(character => {
    if (character) {
      return character;
    }
    else {
      throw new PrimaryKeyError();
    }
  }
  ).catch(error => {
    console.error(error);
  });
};

export const create = (model: ICharacter) => {
  const newCharacter = new Character({
    firstName: model.firstName,
    lastName: model.lastName,
    birthYear: model.birthYear
  })
  return newCharacter.save().then(character => {
    return character;
  }).catch(error => {
    console.error(error);
  }
  );
};

export const update = (id: string, model: ICharacter) => {
  return Character.updateOne({ _id: id }, model).then(
    character => {
      return character;
    }
  ).catch(error => { console.error(error); }
  );
};

export const remove = (id: string) => {
  return Character.deleteOne({ _id: id }).then(
    character => {
      return character;
    }
  ).catch(error => { console.error(error); }
  );
};
