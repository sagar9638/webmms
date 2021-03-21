'use strict';

const utils = require('../../global/utils');
const config = require('../../config');
const sql = require('mssql');


const GetEventMasterData = async (p_Condition) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('EventMaster');
        const list = await pool.request()
            .input('p_Condition', sql.NVarChar(sql.MAX), p_Condition)
            .query(sqlQueries.GetEventMasterData);
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}



const AddEventMasterData = async (ReqData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('EventMaster');
        const AddData = await pool.request()
            .input('p_ECategory', sql.NVarChar(50), ReqData[0].p_ECategory)
            .input('p_EStatus', sql.NVarChar(50), ReqData[0].p_EStatus)
            .input('p_EName', sql.NVarChar(50), ReqData[0].p_EName)
            .input('p_EVenue', sql.NVarChar(100), ReqData[0].p_EVenue)
            .input('p_EDetail', sql.NVarChar(sql.MAX), ReqData[0].p_EDetail)
            .input('p_EUrl', sql.NVarChar(500), ReqData[0].p_EUrl)
            .input('p_EImagePath', sql.NVarChar(500), ReqData[0].p_EImagePath)
            .input('p_EDate', sql.Date, ReqData[0].p_EDate)
            .input('p_ETime', sql.Time, ReqData[0].p_ETime)
            .input('p_IsActive', sql.VarChar, ReqData[0].p_IsActive)
            .input('p_Ord', sql.Decimal(18,2), ReqData[0].p_IsActive)
            .input('p_Remark', sql.NVarChar(200), ReqData[0].p_Remark)
            .input('p_EntDate', sql.Date, ReqData[0].p_EntDate)
            .input('p_EntUser', sql.NVarChar(50), ReqData[0].p_EntUser)
            .query(sqlQueries.AddEventMasterData);

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


const UpdEventMasterData = async (ReqData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('EventMaster');
        const UpdData = await pool.request()
            .input('p_Id', sql.NVarChar(80), ReqData[0].p_Id)
            .input('p_ECategory', sql.NVarChar(50), ReqData[0].p_ECategory)
            .input('p_EStatus', sql.NVarChar(50), ReqData[0].p_EStatus)
            .input('p_EName', sql.NVarChar(50), ReqData[0].p_EName)
            .input('p_EVenue', sql.NVarChar(100), ReqData[0].p_EVenue)
            .input('p_EDetail', sql.NVarChar(sql.MAX), ReqData[0].p_EDetail)
            .input('p_EUrl', sql.NVarChar(500), ReqData[0].p_EUrl)
            .input('p_EImagePath', sql.NVarChar(500), ReqData[0].p_EImagePath)
            .input('p_EDate', sql.Date, ReqData[0].p_EDate)
            .input('p_ETime', sql.Time, ReqData[0].p_ETime)
            .input('p_IsActive', sql.VarChar, ReqData[0].p_IsActive)
            .input('p_Ord', sql.Decimal(18,2), ReqData[0].p_IsActive)
            .input('p_Remark', sql.NVarChar(200), ReqData[0].p_Remark)
            .input('p_UpdUser', sql.NVarChar(50), ReqData[0].p_UpdUser)
            .input('p_UpdDate', sql.Date, ReqData[0].p_UpdDate)
            .query(sqlQueries.UpdEventMasterData);

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

const DeleteEventMasterData = async (ReqData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('EventMaster');
        const DeleteData = await pool.request()
            .input('p_Id', sql.Int, ReqData[0].p_Id)
            .query(sqlQueries.DeleteEventMasterData);

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
    GetEventMasterData,
    AddEventMasterData,
    UpdEventMasterData,
    DeleteEventMasterData
}