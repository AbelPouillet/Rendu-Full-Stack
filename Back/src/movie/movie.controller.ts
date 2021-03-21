import { NextFunction, Request, Response } from 'express';
import {
  create as serviceCreate,
  findAll as serviceFindAll,
  get as serviceGet,
  remove as serviceRemove,
  update as serviceUpdate
} from './movie.service';

export const findAll = (request: Request, response: Response, next: NextFunction): void => {
  serviceFindAll()
    .then(dtos => response.json(dtos))
    .catch(next);
};

export const get = (request: Request, response: Response, next: NextFunction): void => {
  const id = request.params.id;
  serviceGet(id)
    .then(dto => response.json(dto))
    .catch(next);
};

export const create = (request: Request, response: Response, next: NextFunction): void => {
  serviceCreate(request.body)
    .then(item => {
      response.status(201);
      response.json(item);
    })
    .catch(next);
};

export const update = (request: Request, response: Response, next: NextFunction): void => {
  const id = request.params.id;
  serviceUpdate(id, request.body)
    .then(item => response.json(item))
    .catch(next);
};

export const remove = (request: Request, response: Response, next: NextFunction): void => {
  const id = request.params.id;
  serviceRemove(id)
    .then(() => {
      response.status(204);
      response.json();
    })
    .catch(next);
};
