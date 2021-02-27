'use strict';

const DesignationMasterData = require('../data/DesignationMaster');

const GetDesignationData = async (req, res, next) =>{
    try {
        const reqData = req.body[0].p_Condition;
        const ResData = await DesignationMasterData.GetDesignationData(reqData);
        res.send(ResData);
    } catch (error) {
        res.status(400).send(error.message);
        
    }
}

const AddDesignationData = async (req, res, next) =>{
    try {
        const reqData = req.body;
        const ResData = await UserMasterData.AddDesignationData(reqData);
        res.send(ResData);
    } catch (error) {
        res.status(400).send(error.message);
        
    }
}

const UpdDesignationData = async (req, res, next) =>{
    try {
        const reqData = req.body;
        const ResData = await UserMasterData.UpdDesignationData(reqData);
        res.send(ResData);
    } catch (error) {
        res.status(400).send(error.message);
        
    }
}

const DeleteDesignationData = async (req, res, next) =>{
    try {
        const reqData = req.body;
        const ResData = await UserMasterData.DeleteDesignationData(reqData);
        res.send(ResData);
    } catch (error) {
        res.status(400).send(error.message);
        
    }
}


module.exports = {
    GetDesignationData,
    AddDesignationData,
    UpdDesignationData,
    DeleteDesignationData
}
