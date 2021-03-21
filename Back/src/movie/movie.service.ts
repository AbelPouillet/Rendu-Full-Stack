import { itemErrorHandler } from '../common/error/error.mapper';
import { dtoToModel, modelToDto } from './movie.mapper';
import { IMovieDto } from './movie.model';
import {
  create as repositoryCreate,
  findAll as repositoryFindAll,
  get as repositoryGet,
  remove as repositoryRemove,
  update as repositoryUpdate
} from './movie.repository';

export const findAll = (): Promise<IMovieDto[]> => {
  return repositoryFindAll()
    .then(characters => characters.map(modelToDto));
};

export const get = (id: string): Promise<IMovieDto> => {
  return repositoryGet(id)
    .then(modelToDto)
    .catch(itemErrorHandler(id));
};

export const create = (dto: IMovieDto): Promise<IMovieDto> => {
  const character = dtoToModel(dto);
  return repositoryCreate(character)
    .then(modelToDto);
};

export const update = (id: string, dto: IMovieDto): Promise<IMovieDto> => {
  const character = dtoToModel(dto);
  return repositoryUpdate(id, character)
    .then(modelToDto)
    .catch(itemErrorHandler(id));
};

export const remove = (id: string): Promise<IMovieDto> => {
  return repositoryRemove(id)
    .then(modelToDto)
    .catch(itemErrorHandler(id));
};
