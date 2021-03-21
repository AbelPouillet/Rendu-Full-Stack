import express from 'express';

const routerCharacter = require('./character/character.route');
const routerMovie = require('./movie/movie.route');

export const routeur = express.Router();

routeur.use('/characters', routerCharacter);
routeur.use('/movies', routerMovie);

