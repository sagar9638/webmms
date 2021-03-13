'use strict';

const express = require('express');
const MenuRightsMasterController = require('../controllers/MenuRightsMasterController');
const router = express.Router();

const {GetMenuRightsMasterData,AddMenuRightsMaster,UpdMenuRightsMaster,DeleteMenuRightsMaster} = MenuRightsMasterController;

router.post('/GetMenuRightsMasterData',GetMenuRightsMasterData);
router.post('/AddMenuRightsMaster',AddMenuRightsMaster);
router.post('/UpdMenuRightsMaster',UpdMenuRightsMaster);
router.post('/DeleteMenuRightsMaster',DeleteMenuRightsMaster);

module.exports = {
    routes: router
}