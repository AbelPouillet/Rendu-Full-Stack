import express from 'express';
import { routeParamIdMiddleware } from '../common/route-param-id.middleware';
import { create, findAll, get, remove, update } from './movie.controller';

export const router = express.Router();
router.get('/', findAll);
router.get('/:id', routeParamIdMiddleware, get);
router.post('/', create);
router.put('/:id', routeParamIdMiddleware, update);
router.delete('/:id', routeParamIdMiddleware, remove);
