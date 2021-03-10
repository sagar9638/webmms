'use strict';

const express = require('express');
const UserProfileController = require('../controllers/UserProfileController');
const router = express.Router();

const {GetUserProfileData,GetUserProfileDesignationData} = UserProfileController;

router.post('/GetUserProfileData',GetUserProfileData);
router.post('/GetUserProfileDesignationData',GetUserProfileDesignationData);

module.exports = {
    routes: router
}