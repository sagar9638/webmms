'use strict';

const UserProfileData = require('../data/UserProfile');

const GetUserProfileData = async (req, res, next) => {
    try {
        const reqData = req.body[0].p_Condition;
        const getData = await UserProfileData.GetUserProfileData(reqData);
        res.send(getData);
    } catch (error) {
        res.status(400).send(error.message);

    }
}


const GetUserProfileDesignationData = async (req, res, next) => {
    try {
        const reqData = req.body[0].p_Condition;
        const getData = await UserProfileData.GetUserProfileDesignationData(reqData);
        res.send(getData);
    } catch (error) {
        res.status(400).send(error.message);

    }
}

module.exports = {
    GetUserProfileData,
    GetUserProfileDesignationData
}
