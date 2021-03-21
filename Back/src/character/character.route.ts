const characterCtrl = require('./character.controller');
const approute = require('express');
import { routeParamIdMiddleware } from '../common/route-param-id.middleware';

const routeur = approute.Router();

routeur.get('/', characterCtrl.findAllCtrl);
routeur.post('/', characterCtrl.createCtrl);
routeur.put('/:id',routeParamIdMiddleware, characterCtrl.updateCtrl);
routeur.delete('/:id',routeParamIdMiddleware, characterCtrl.deleteCtrl);
routeur.get('/:id',routeParamIdMiddleware, characterCtrl.findCtrl);




module.exports = routeur;