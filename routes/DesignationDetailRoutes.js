'use strict';

const express = require('express');
const DesignationDetailController = require('../controllers/DesignationDetailController');
const router = express.Router();

const {GetDesignationDetailData,AddDesignationDetailData} = DesignationDetailController;

router.post('/GetDesignationDetailData',GetDesignationDetailData);
router.post('/AddDesignationDetailData',AddDesignationDetailData);

module.exports = {
    routes: router
}