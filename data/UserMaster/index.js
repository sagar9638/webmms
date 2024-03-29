'use strict';

const utils = require('../../global/utils');
const config = require('../../config');
const sql = require('mssql');


const getUsers = async (p_Condition) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('UserMaster');
        const list = await pool.request()
            .input('p_Condition', sql.NVarChar(sql.MAX), p_Condition)
            .query(sqlQueries.GetUserMaster);
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}


const getRegistrationById = async (ID) => {
    try {
        let pool = await sql.connect(config.sql);
        const transaction = new sql.Transaction(pool);
        transaction.begin();
        const sqlQueries = await utils.loadSqlQueries('Registration');
        const oneList = await pool.request()
            .input('Id', sql.Int, ID)
            .query(sqlQueries.RegistrationById);
        transaction.commit();
        return oneList.recordset;
    } catch (error) {
        return error.message;
    }
}


const AddUser = async (UserData) => {
    try {
        let pool = await sql.connect(config.sql);
        //const transaction = new sql.Transaction(pool);
        //transaction.begin();
        const sqlQueries = await utils.loadSqlQueries('UserMaster');
        const AddUser = await pool.request()
            .input('RefId', sql.NVarChar(50), UserData[0].RefId)
            .input('Name', sql.NVarChar(50), UserData[0].Name)
            .input('City', sql.NVarChar(50), UserData[0].City)
            .input('DOB', sql.Date, UserData[0].DOB)
            .input('MobileNo', sql.NVarChar(15), UserData[0].MobileNo)
            .input('EmailId', sql.NVarChar(80), UserData[0].EmailId)
            .input('EntUser', sql.NVarChar(50), UserData[0].EntUser)
            .input('UserName', sql.NVarChar(50), UserData[0].UserName)
            .input('Password', sql.NVarChar(20), UserData[0].Password)
            .input('CDoing', sql.NVarChar(200), UserData[0].CDoing)
            .input('Dream', sql.NVarChar(200), UserData[0].Dream)
            .input('PId', sql.NVarChar(200), UserData[0].PId)
            .query(sqlQueries.AddUser);
        //transaction.commit();

        if (UserData[0].RefId != null && UserData[0].RefId != "") {
            const UpdateRefId = await pool.request()
                .input('UserId', sql.Int, AddUser.recordset[0].USERID)
                .input('RefId', sql.NVarChar(50), UserData[0].RefId + '.' + AddUser.recordset[0].USERID)
                .query(sqlQueries.UpdateRefId);
        }

        let OutObject = {
            flag: true,
            mesg: "Insert Successfully..!!",
            recordset: AddUser.recordset
        }
        return OutObject;
    } catch (error) {
        return error.message;
    }
}

const ValidLogin = async (LoginData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('UserMaster');
        const ValidUser = await pool.request()
            .input('p_UserName', sql.NVarChar(50), LoginData[0].p_UserName)
            .input('p_Password', sql.NVarChar(20), LoginData[0].p_Password)
            .query(sqlQueries.ValidLogin);

        let OutObject = {}
        if (ValidUser.recordset.length != 0) {
            OutObject = {
                flag: true,
                mesg: "Login Successfully..!!",
                recordset: ValidUser.recordset
            }
        } else {
            OutObject = {
                flag: false,
                mesg: "UserName or Password Is Incorrect..!!",
                recordset: ValidUser
            }
        }
        return OutObject;
    } catch (error) {
        return error.message;
    }
}

const ValidUserNameCheck = async (LoginData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('UserMaster');
        const _ValidUserNameCheck = await pool.request()
            .input('p_UserName', sql.NVarChar(50), LoginData[0].p_UserName)
            .query(sqlQueries.ValidUserNameCheck);
        console.log('_ValidUserNameCheck', _ValidUserNameCheck.recordset.length);
        let OutObject = {}
        if (_ValidUserNameCheck.recordset.length != 0) {
            OutObject = {
                flag: false,
                mesg: "Username already exists..!!",
                recordset: _ValidUserNameCheck
            }
        } else {
            OutObject = {
                flag: true,
                mesg: "",
                recordset: _ValidUserNameCheck.recordset
            }
        }
        return OutObject;
    } catch (error) {
        return error.message;
    }
}


const MembersHierarchy = async (UserRefId) => {
    try {

        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('UserMaster');
        const ValidUser = await pool.request()
            .input('p_Condition', sql.NVarChar(50), UserRefId[0].RefId + '%')
            .query(sqlQueries.MembersHierarchy);

        let OutObject = {}
        if (ValidUser.recordset.length != 0) {
            OutObject = {
                flag: true,
                mesg: "Successfully..!!",
                recordset: ValidUser.recordset
            }
        } else {
            OutObject = {
                flag: false,
                mesg: "No Data Found..!!",
                recordset: ValidUser
            }
        }
        return OutObject;
    } catch (error) {
        return error.message;
    }
}


const UpdConfirmFlag = async (ReqData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('UserMaster');
        const UpdData = await pool.request()
            .input('p_ConfirmFlag', sql.VarChar, ReqData[0].p_ConfirmFlag)
            .input('p_ConfirmStatusId', sql.VarChar, ReqData[0].p_ConfirmStatusId)
            .input('p_ConfirmUser', sql.VarChar, ReqData[0].p_ConfirmUser)
            .input('p_Id', sql.Int, ReqData[0].p_Id)
            .input('RefId', sql.NVarChar(50), ReqData[0].p_RefId)
            .query(sqlQueries.UserConfirmationFlagUpdate);

        let OutObject = {
            flag: true,
            mesg: "Confirm User Successfully..!!",
            recordset: UpdData.recordset
        }
        return OutObject;
    } catch (error) {
        return error.message;
    }
}

const UpdUserPackageID = async (ReqData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('UserMaster');
        const UpdData = await pool.request()
            .input('p_Id', sql.Int, ReqData[0].p_Id)
            .input('p_PId', sql.NVarChar(50), ReqData[0].p_PId)
            .query(sqlQueries.UpdUserPackageID);

        let OutObject = {
            flag: true,
            mesg: "Update User Package Id Successfully..!!",
            recordset: UpdData.recordset
        }
        return OutObject;
    } catch (error) {
        return error.message;
    }
}

const UpdateUserDetail = async (ReqData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('UserMaster');
        const UpdData = await pool.request()
            .input('p_Id', sql.Int, ReqData[0].p_Id)
            .input('p_Name', sql.VarChar, ReqData[0].p_Name)
            .input('p_City', sql.VarChar, ReqData[0].p_City)
            .input('p_MobileNo', sql.VarChar, ReqData[0].p_MobileNo)
            .input('p_EmailId', sql.VarChar, ReqData[0].p_EmailId)
            .input('p_UserProfileUrl', sql.NVarChar(sql.MAX), ReqData[0].p_UserProfileUrl)
            .input('p_UserProtfilePath', sql.NVarChar(300), ReqData[0].p_UserProtfilePath)
            .query(sqlQueries.UpdateUserDetail);

        let OutObject = {
            flag: true,
            mesg: "Update User Successfully..!!",
            recordset: UpdData.recordset
        }
        return OutObject;
    } catch (error) {
        return error.message;
    }
}

const DeleteUser = async (ReqData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('UserMaster');
        const DeleteData = await pool.request()
            .input('p_Id', sql.Int, ReqData[0].p_Id)
            .query(sqlQueries.DeleteUser);

        let OutObject = {
            flag: true,
            mesg: "Delete Successfully..!!",
            recordset: DeleteData.recordset
        }
        return OutObject;
    } catch (error) {
        return error.message;
    }
}



module.exports = {
    getUsers,
    AddUser,
    ValidLogin,
    MembersHierarchy,
    ValidUserNameCheck,
    UpdConfirmFlag,
    UpdUserPackageID,
    UpdateUserDetail,
    DeleteUser
}