'use strict';

const express = require('express');
const CategoryMasterController = require('../controllers/CategoryMasterController');
const router = express.Router();

const {GetCategoryMasterData,AddCategoryMasterData,UpdCategoryMasterData,DeleteCategoryMasterData} = CategoryMasterController;

router.post('/GetCategoryMasterData',GetCategoryMasterData);
router.post('/AddCategoryMasterData',AddCategoryMasterData);
router.post('/UpdCategoryMasterData',UpdCategoryMasterData);
router.post('/DeleteCategoryMasterData',DeleteCategoryMasterData);

module.exports = {
    routes: router
}