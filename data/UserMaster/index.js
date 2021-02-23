'use strict';

const utils = require('../../global/utils');
const config = require('../../config');
const sql = require('mssql');


const getUsers = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('UserMaster');
        const list = await pool.request().query(sqlQueries.GetUserMaster);
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


module.exports = {
    getUsers,
    AddUser,
    ValidLogin,
    MembersHierarchy,
    ValidUserNameCheck
}