import express from 'express';
import { router as characterRouter } from './character/character.router';
import { routeNotFoundMiddleware } from './common/route-not-found.middleware';
import { router as movieRouter } from './movie/movie.router';

export const router = express.Router();
router.use('/characters', characterRouter);
router.use('/movies', movieRouter);
router.use(routeNotFoundMiddleware);
