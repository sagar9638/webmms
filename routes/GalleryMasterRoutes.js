'use strict';

const express = require('express');
const GalleryMasterController = require('../controllers/GalleryMasterController');
const router = express.Router();

const {GetGalleryMasterData,AddGalleryMaster,DeleteGalleryMaster} = GalleryMasterController;

router.post('/GetGalleryMasterData',GetGalleryMasterData);
router.post('/AddGalleryMaster',AddGalleryMaster);
router.post('/DeleteGalleryMaster',DeleteGalleryMaster);

module.exports = {
    routes: router
}