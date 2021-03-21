'use strict';

const express = require('express');
const EventMasterController = require('../controllers/EventMasterController');
const router = express.Router();

const {GetEventMasterData,AddEventMasterData,UpdEventMasterData,DeleteEventMasterData} = EventMasterController;

router.post('/GetEventMasterData',GetEventMasterData);
router.post('/AddEventMasterData',AddEventMasterData);
router.post('/UpdEventMasterData',UpdEventMasterData);
router.post('/DeleteEventMasterData',DeleteEventMasterData);

module.exports = {
    routes: router
}