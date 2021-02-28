'use strict';

const UserMasterData = require('../data/UserMaster');

const getUsers = async (req, res, next) =>{
    try {
        const reqData = req.body[0].p_Condition;
        const getUserData = await UserMasterData.getUsers(reqData);
        res.send(getUserData);
    } catch (error) {
        res.status(400).send(error.message);
        
    }
}

const AddUser = async (req, res, next) =>{
    try {
        const reqData = req.body;
        const CreateUserData = await UserMasterData.AddUser(reqData);
        res.send(CreateUserData);
    } catch (error) {
        res.status(400).send(error.message);
        
    }
}

const ValidUserLogin = async (req, res, next) =>{
    try {
        const reqData = req.body;
        const _ValidUserLogin = await UserMasterData.ValidLogin(reqData);
        res.send(_ValidUserLogin);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const ValidUserNameCheck = async (req, res, next) =>{
    try {
        const reqData = req.body;
        const _ValidUserLogin = await UserMasterData.ValidUserNameCheck(reqData);
        res.send(_ValidUserLogin);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const MembersHierarchy = async (req, res, next) =>{
    try {
        const reqData = req.body;
        const _MembersHierarchy = await UserMasterData.MembersHierarchy(reqData);
        res.send(_MembersHierarchy);
    } catch (error) {
        res.status(400).send(error.message);
    }
}


const UpdConfirmFlag = async (req, res, next) =>{
    try {
        const reqData = req.body;
        const ResData = await UserMasterData.UpdConfirmFlag(reqData);
        res.send(ResData);
    } catch (error) {
        res.status(400).send(error.message);
        
    }
}


// const getRegistrationById = async (req, res, next) =>{
//     try {
//         const ID = req.params.ID;
//         const oneRegistration = await registrationData.getRegistrationById(ID);
//         res.send(oneRegistration);
//     } catch (error) {
//         res.status(400).send(error.message);
//     }
// }  

// const AddRegistrationData = async (req, res, next) =>{
//     try {
//         const ID = req.params.ID;
//         const oneRegistration = await registrationData.getRegistrationById(ID);
//         res.send(oneRegistration);
//     } catch (error) {
//         res.status(400).send(error.message);
//     }
// } 

module.exports = {
    getUsers,
    AddUser,
    ValidUserLogin,
    MembersHierarchy,
    ValidUserNameCheck,
    UpdConfirmFlag
}