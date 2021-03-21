'use strict';

const EventMasterData = require('../data/EventMaster');

const GetEventMasterData = async (req, res, next) =>{
    try {
        const reqData = req.body[0].p_Condition;
        const ResData = await EventMasterData.GetEventMasterData(reqData);
        res.send(ResData);
    } catch (error) {
        res.status(400).send(error.message);
        
    }
}

const AddEventMasterData = async (req, res, next) =>{
    try {
        const reqData = req.body;
        const ResData = await EventMasterData.AddEventMasterData(reqData);
        res.send(ResData);
    } catch (error) {
        res.status(400).send(error.message);
        
    }
}

const UpdEventMasterData = async (req, res, next) =>{
    try {
        const reqData = req.body;
        const ResData = await EventMasterData.UpdEventMasterData(reqData);
        res.send(ResData);
    } catch (error) {
        res.status(400).send(error.message);
        
    }
}

const DeleteEventMasterData = async (req, res, next) =>{
    try {
        const reqData = req.body;
        const ResData = await EventMasterData.DeleteEventMasterData(reqData);
        res.send(ResData);
    } catch (error) {
        res.status(400).send(error.message);
        
    }
}


module.exports = {
    GetEventMasterData,
    AddEventMasterData,
    UpdEventMasterData,
    DeleteEventMasterData
}
