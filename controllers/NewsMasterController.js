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

module.exports = {
    GetNewsMasterData
}