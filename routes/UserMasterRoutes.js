'use strict';

const express = require('express');
const UserMasterController = require('../controllers/UserMasterController');
const router = express.Router();

const {getUsers,AddUser,ValidUserLogin,MembersHierarchy} = UserMasterController;

router.get('/GetUser',getUsers);
router.post('/AddUser',AddUser);
router.post('/ValidLogin',ValidUserLogin);
router.post('/MembersHierarchy',MembersHierarchy);

module.exports = {
    routes: router
}