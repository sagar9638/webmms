'use strict';

const MenuRightsMaster = require('../data/MenuRightsMaster');

const GetMenuRightsMasterData = async (req, res, next) =>{
    try {
        const reqData = req.body[0].p_Condition;
        const ResData = await MenuRightsMaster.GetMenuRightsMasterData(reqData);
        res.send(ResData);
    } catch (error) {
        res.status(400).send(error.message);
        
    }
}

const AddMenuRightsMaster = async (req, res, next) =>{
    try {
        const reqData = req.body;
        const ResData = await MenuRightsMaster.AddMenuRightsMaster(reqData);
        res.send(ResData);
    } catch (error) {
        res.status(400).send(error.message);
        
    }
}

const UpdMenuRightsMaster = async (req, res, next) =>{
    try {
        const reqData = req.body;
        const ResData = await MenuRightsMaster.UpdMenuRightsMaster(reqData);
        res.send(ResData);
    } catch (error) {
        res.status(400).send(error.message);
        
    }
}

const DeleteMenuRightsMaster = async (req, res, next) =>{
    try {
        const reqData = req.body;
        const ResData = await MenuRightsMaster.DeleteMenuRightsMaster(reqData);
        res.send(ResData);
    } catch (error) {
        res.status(400).send(error.message);
        
    }
}


module.exports = {
    GetMenuRightsMasterData,
    AddMenuRightsMaster,
    UpdMenuRightsMaster,
    DeleteMenuRightsMaster
}
