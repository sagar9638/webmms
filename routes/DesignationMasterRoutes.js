'use strict';

const express = require('express');
const DesignationMasterController = require('../controllers/DesignationMasterController');
const router = express.Router();

const {GetDesignationData,AddDesignationData,UpdDesignationData,DeleteDesignationData} = DesignationMasterController;

router.post('/GetDesignationData',GetDesignationData);
router.post('/AddDesignationData',AddDesignationData);
router.post('/UpdDesignationData',UpdDesignationData);
router.post('/DeleteDesignationData',DeleteDesignationData);

module.exports = {
    routes: router
}