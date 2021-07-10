'use strict';

const express = require('express');
const NewsMasterController = require('../controllers/NewsMasterController');
const router = express.Router();

const {GetNewsMasterData} = NewsMasterController;

router.post('/GetNewsMasterData',GetNewsMasterData);

module.exports = {
    routes: router
}