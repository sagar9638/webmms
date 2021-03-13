'use strict';

const GalleryMaster = require('../data/GalleryMaster');

const GetGalleryMasterData = async (req, res, next) =>{
    try {
        const reqData = req.body[0].p_Condition;
        const ResData = await GalleryMaster.GetGalleryMasterData(reqData);
        res.send(ResData);
    } catch (error) {
        res.status(400).send(error.message);
        
    }
}

const AddGalleryMaster = async (req, res, next) =>{
    try {
        const reqData = req.body;
        const ResData = await GalleryMaster.AddGalleryMaster(reqData);
        res.send(ResData);
    } catch (error) {
        res.status(400).send(error.message);
        
    }
}

const DeleteGalleryMaster = async (req, res, next) =>{
    try {
        const reqData = req.body;
        const ResData = await GalleryMaster.DeleteGalleryMaster(reqData);
        res.send(ResData);
    } catch (error) {
        res.status(400).send(error.message);
        
    }
}


module.exports = {
    GetGalleryMasterData,
    AddGalleryMaster,
    DeleteGalleryMaster
}
