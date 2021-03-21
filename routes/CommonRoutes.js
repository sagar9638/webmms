'use strict';

const express = require('express');
const CommonController = require('../controllers/CommonController');
const router = express.Router();

const {GetMenuRightsData,SendVerificationMail,GetAchievementData} = CommonController;

router.post('/GetMenuRightsData',GetMenuRightsData);
router.post('/SendVerificationMail',SendVerificationMail);
router.post('/GetAchievementData',GetAchievementData);

module.exports = {
    routes: router
}
