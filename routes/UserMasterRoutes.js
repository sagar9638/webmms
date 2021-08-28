'use strict';

const express = require('express');
const UserMasterController = require('../controllers/UserMasterController');
const router = express.Router();

const {getUsers,AddUser,ValidUserLogin,MembersHierarchy,ValidUserNameCheck,UpdConfirmFlag,UpdateUserDetail,DeleteUser,UpdUserPackageID} = UserMasterController;

router.post('/GetUser',getUsers);
router.post('/AddUser',AddUser);
router.post('/ValidLogin',ValidUserLogin);
router.post('/MembersHierarchy',MembersHierarchy);
router.post('/ValidUserNameCheck',ValidUserNameCheck);
router.post('/UpdConfirmFlag',UpdConfirmFlag);
router.post('/UpdUserPackageID',UpdUserPackageID);
router.post('/UpdateUserDetail',UpdateUserDetail);
router.post('/DeleteUser',DeleteUser);

module.exports = {
    routes: router
}