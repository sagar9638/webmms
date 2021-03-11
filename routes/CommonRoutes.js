'use strict';

const express = require('express');
const CommonController = require('../controllers/CommonController');
const router = express.Router();

const {GetMenuRightsData} = CommonController;

router.post('/GetMenuRightsData',GetMenuRightsData);

module.exports = {
    routes: router
}
