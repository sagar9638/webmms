'use strict';

const express = require('express');
const MenuMasterController = require('../controllers/MenuMasterController');
const router = express.Router();

const {GetMenuData,AddMenuData,UpdMenuData,DeleteMenuData} = MenuMasterController;

router.post('/GetMenuData',GetMenuData);
router.post('/AddMenuData',AddMenuData);
router.post('/UpdMenuData',UpdMenuData);
router.post('/DeleteMenuData',DeleteMenuData);

module.exports = {
    routes: router
}