'use strict';

const express = require('express');
const UserMasterController = require('../controllers/UserMasterController');
const router = express.Router();

const {getUsers,AddUser,ValidUserLogin,MembersHierarchy,ValidUserNameCheck} = UserMasterController;

router.post('/GetUser',getUsers);
router.post('/AddUser',AddUser);
router.post('/ValidLogin',ValidUserLogin);
router.post('/MembersHierarchy',MembersHierarchy);
router.post('/ValidUserNameCheck',ValidUserNameCheck);

module.exports = {
    routes: router
}