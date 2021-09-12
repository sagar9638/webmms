'use strict';

const NewsMasterData = require('../data/NewsMaster');

const GetNewsMasterData = async (req, res, next) =>{
    try {
        const reqData = req.body[0].p_Condition;
        const ResData = await NewsMasterData.GetNewsMasterData(reqData);
        res.send(ResData);
    } catch (error) {
        res.status(400).send(error.message);
        
    }
}

const AddNewsMasterData = async (req, res, next) =>{
    try {
        const reqData = req.body;
        const ResData = await NewsMasterData.AddNewsMasterData(reqData);
        res.send(ResData);
    } catch (error) {
        res.status(400).send(error.message);
        
    }
}

const UpdNewsMasterData = async (req, res, next) =>{
    try {
        const reqData = req.body;
        const ResData = await NewsMasterData.UpdNewsMasterData(reqData);
        res.send(ResData);
    } catch (error) {
        res.status(400).send(error.message);
        
    }
}

const DeleteNewsMasterData = async (req, res, next) =>{
    try {
        const reqData = req.body;
        const ResData = await NewsMasterData.DeleteNewsMasterData(reqData);
        res.send(ResData);
    } catch (error) {
        res.status(400).send(error.message);
    }
}


module.exports = {
    GetNewsMasterData,
    AddNewsMasterData,
    UpdNewsMasterData,
    DeleteNewsMasterData
}