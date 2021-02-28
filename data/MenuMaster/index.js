'use strict';

const utils = require('../../global/utils');
const config = require('../../config');
const sql = require('mssql');


const GetMenuData = async (p_Condition) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('MenuMaster');
        const list = await pool.request()
            .input('p_Condition', sql.NVarChar(sql.MAX), p_Condition)
            .query(sqlQueries.GetMenuData);
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}


const AddMenuData = async (ReqData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('MenuMaster');
        const AddData = await pool.request()
            .input('p_MRefId', sql.Int, ReqData[0].p_MRefId)
            .input('p_MTitle', sql.NVarChar(80), ReqData[0].p_MTitle)
            .input('p_MName', sql.NVarChar(80), ReqData[0].p_MName)
            .input('p_MPath', sql.NVarChar(120), ReqData[0].p_MPath)
            .input('p_MIcon', sql.NVarChar(50), ReqData[0].p_MIcon)
            .input('p_Remark', sql.NVarChar(100), ReqData[0].p_Remark)
            .input('p_IsActive', sql.NVarChar(6), ReqData[0].p_IsActive)
            .input('p_EntUser', sql.NVarChar(50), ReqData[0].p_EntUser)
            .input('p_EntDate', sql.Date, ReqData[0].p_EntDate)
            .query(sqlQueries.AddMenuData);

        let OutObject = {
            flag: true,
            mesg: "Insert Successfully..!!",
            recordset: AddData.recordset
        }
        return OutObject;
    } catch (error) {
        return error.message;
    }
}


const UpdMenuData = async (ReqData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('MenuMaster');
        const UpdData = await pool.request()
            .input('p_MId', sql.Int, ReqData[0].p_MId)
            .input('p_MRefId', sql.Int, ReqData[0].p_MRefId)
            .input('p_MTitle', sql.NVarChar(80), ReqData[0].p_MTitle)
            .input('p_MName', sql.NVarChar(80), ReqData[0].p_MName)
            .input('p_MPath', sql.NVarChar(120), ReqData[0].p_MPath)
            .input('p_MIcon', sql.NVarChar(50), ReqData[0].p_MIcon)
            .input('p_Remark', sql.NVarChar(100), ReqData[0].p_Remark)
            .input('p_IsActive', sql.NVarChar(6), ReqData[0].p_IsActive)
            .input('p_UpdUser', sql.NVarChar(50), ReqData[0].p_UpdUser)
            .input('p_UpdDate', sql.Date, ReqData[0].p_UpdDate)
            .query(sqlQueries.UpdMenuData);

        let OutObject = {
            flag: true,
            mesg: "Update Successfully..!!",
            recordset: UpdData.recordset
        }
        return OutObject;
    } catch (error) {
        return error.message;
    }
}

const DeleteMenuData = async (ReqData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('MenuMaster');
        const DeleteData = await pool.request()
            .input('p_MId', sql.Int, ReqData[0].p_MId)
            .query(sqlQueries.DeleteMenuData);

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
    GetMenuData,
    AddMenuData,
    UpdMenuData,
    DeleteMenuData
}