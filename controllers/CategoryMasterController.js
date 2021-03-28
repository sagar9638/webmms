'use strict';

const CategoryMasterData = require('../data/CategoryMaster');

const GetCategoryMasterData = async (req, res, next) =>{
    try {
        const reqData = req.body[0].p_Condition;
        const ResData = await CategoryMasterData.GetCategoryMasterData(reqData);
        res.send(ResData);
    } catch (error) {
        res.status(400).send(error.message);
        
    }
}

const AddCategoryMasterData = async (req, res, next) =>{
    try {
        const reqData = req.body;
        const ResData = await CategoryMasterData.AddCategoryMasterData(reqData);
        res.send(ResData);
    } catch (error) {
        res.status(400).send(error.message);
        
    }
}

const UpdCategoryMasterData = async (req, res, next) =>{
    try {
        const reqData = req.body;
        const ResData = await CategoryMasterData.UpdCategoryMasterData(reqData);
        res.send(ResData);
    } catch (error) {
        res.status(400).send(error.message);
        
    }
}

const DeleteCategoryMasterData = async (req, res, next) =>{
    try {
        const reqData = req.body;
        const ResData = await CategoryMasterData.DeleteCategoryMasterData(reqData);
        res.send(ResData);
    } catch (error) {
        res.status(400).send(error.message);
        
    }
}


module.exports = {
    GetCategoryMasterData,
    AddCategoryMasterData,
    UpdCategoryMasterData,
    DeleteCategoryMasterData
}
