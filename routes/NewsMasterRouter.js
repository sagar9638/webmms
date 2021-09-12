'use strict';

const express = require('express');
const NewsMasterController = require('../controllers/NewsMasterController');
const router = express.Router();

const {GetNewsMasterData,AddNewsMasterData,UpdNewsMasterData,DeleteNewsMasterData} = NewsMasterController;

router.post('/GetNewsMasterData',GetNewsMasterData);
router.post('/AddNewsMasterData',AddNewsMasterData);
router.post('/UpdNewsMasterData',UpdNewsMasterData);
router.post('/DeleteNewsMasterData',DeleteNewsMasterData);

module.exports = {
    routes: router
}