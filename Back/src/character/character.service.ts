import { itemErrorHandler } from '../common/error/error.mapper';
import { dtoToModel, modelToDto } from './character.mapper';
import { ICharacterDto } from './character.model';
import {
  create as repositoryCreate,
  findAll as repositoryFindAll,
  get as repositoryGet,
  remove as repositoryRemove,
  update as repositoryUpdate
} from './character.repository';

export const findAll = () => {
  return repositoryFindAll()
    .then(characters => characters.map(modelToDto));
};

export const get = (id: string) => {
  return repositoryGet(id)
    .then(modelToDto)
    .catch(itemErrorHandler(id));
};

export const create = (dto: ICharacterDto) => {
  const character = dtoToModel(dto);
  return repositoryCreate(character)
    .then(modelToDto);
};

export const update = (id: string, dto: ICharacterDto) => {
  const character = dtoToModel(dto);
  return repositoryUpdate(id, character)
    .then(modelToDto)
    .catch(itemErrorHandler(id));
};

export const remove = (id: string) => {
  return repositoryRemove(id)
    .then(modelToDto)
    .catch(itemErrorHandler(id));
};
