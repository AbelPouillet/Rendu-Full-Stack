import { routeParamIdMiddleware } from "../common/route-param-id.middleware";

const movieCtrl = require('./movie.controller');
const express = require('express');
const router = express.Router();


router.get('/', movieCtrl.findAllCtrl);
router.post('/', movieCtrl.createCtrl);
router.put('/:id',routeParamIdMiddleware, movieCtrl.updateCtrl);
router.delete('/:id',routeParamIdMiddleware, movieCtrl.deleteCtrl);
router.get('/:id',routeParamIdMiddleware, movieCtrl.findCtrl)


module.exports = router;