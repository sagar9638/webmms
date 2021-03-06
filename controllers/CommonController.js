'use strict';

const Common = require('../data/Common');

const GetMenuRightsData = async (req, res, next) => {
    try {
        const reqData = req.body[0].p_Condition;
        const getData = await Common.GetMenuRightsData(reqData);
        res.send(getData);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const GetAchievementData = async (req, res, next) => {
    try {
        const reqData = req.body[0].p_Condition;
        const getData = await Common.GetAchievementData(reqData);
        res.send(getData);
    } catch (error) {
        res.status(400).send(error.message);
    }
}


const SendVerificationMail = async (req, res, next) => {
    try {
        const reqData = req.body;
        const getData = await Common.SendVerificationMail(reqData);
        res.send(getData);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    GetMenuRightsData,
    SendVerificationMail,
    GetAchievementData
}
