'use strict';

const MenuMasterData = require('../data/MenuMaster');

const GetMenuData = async (req, res, next) =>{
    try {
        const reqData = req.body[0].p_Condition;
        const ResData = await MenuMasterData.GetMenuData(reqData);
        res.send(ResData);
    } catch (error) {
        res.status(400).send(error.message);
        
    }
}

const AddMenuData = async (req, res, next) =>{
    try {
        const reqData = req.body;
        const ResData = await UserMasterData.AddMenuData(reqData);
        res.send(ResData);
    } catch (error) {
        res.status(400).send(error.message);
        
    }
}

const UpdMenuData = async (req, res, next) =>{
    try {
        const reqData = req.body;
        const ResData = await UserMasterData.UpdMenuData(reqData);
        res.send(ResData);
    } catch (error) {
        res.status(400).send(error.message);
        
    }
}

const DeleteMenuData = async (req, res, next) =>{
    try {
        const reqData = req.body;
        const ResData = await UserMasterData.DeleteMenuData(reqData);
        res.send(ResData);
    } catch (error) {
        res.status(400).send(error.message);
        
    }
}


module.exports = {
    GetMenuData,
    AddMenuData,
    UpdMenuData,
    DeleteMenuData
}
