'use strict';

const DesignationDetailData = require('../data/DesignationDetail');

const GetDesignationDetailData = async (req, res, next) =>{
    try {
        const reqData = req.body[0].p_Condition;
        const ResData = await DesignationDetailData.GetDesignationDetailData(reqData);
        res.send(ResData);
    } catch (error) {
        res.status(400).send(error.message);
        
    }
}


const AddDesignationDetailData = async (req, res, next) =>{
    try {
        const reqData = req.body;
        const ResData = await DesignationMasterData.AddDesignationDetailData(reqData);
        res.send(ResData);
    } catch (error) {
        res.status(400).send(error.message);
        
    }
}

module.exports = {
    GetDesignationDetailData,
    AddDesignationDetailData
}

