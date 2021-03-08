'use strict';

const express = require('express');
const UserMasterController = require('../controllers/UserMasterController');
const router = express.Router();

const {getUsers,AddUser,ValidUserLogin,MembersHierarchy,ValidUserNameCheck,UpdConfirmFlag} = UserMasterController;

router.post('/GetUser',getUsers);
router.post('/AddUser',AddUser);
router.get('/ValidLogin',ValidUserLogin);
router.post('/MembersHierarchy',MembersHierarchy);
router.post('/ValidUserNameCheck',ValidUserNameCheck);
router.post('/UpdConfirmFlag',UpdConfirmFlag);

module.exports = {
    routes: router
}