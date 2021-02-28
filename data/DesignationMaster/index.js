'use strict';

const utils = require('../../global/utils');
const config = require('../../config');
const sql = require('mssql');


const GetDesignationData = async (p_Condition) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('DesignationMaster');
        const list = await pool.request()
            .input('p_Condition', sql.NVarChar(sql.MAX), p_Condition)
            .query(sqlQueries.GetDesignationData);
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}


const AddDesignationData = async (ReqData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('DesignationMaster');
        const AddData = await pool.request()
            .input('p_DName', sql.NVarChar(80), ReqData[0].DName)
            .input('p_DShortName', sql.NVarChar(30), ReqData[0].DShortName)
            .input('p_DAchiveCount', sql.Int, ReqData[0].DAchiveCount)
            .input('p_Remark', sql.NVarChar(100), ReqData[0].Remark)
            .input('p_IsActive', sql.VarChar, ReqData[0].IsActive)
            .input('p_EntUser', sql.NVarChar(50), ReqData[0].EntUser)
            .input('p_EntDate', sql.Date, ReqData[0].EntDate)
            .query(sqlQueries.AddDesignationMaster);

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


const UpdDesignationData = async (ReqData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('DesignationMaster');
        const UpdData = await pool.request()
            .input('p_DName', sql.NVarChar(80), ReqData[0].DName)
            .input('p_DShortName', sql.NVarChar(30), ReqData[0].DShortName)
            .input('p_DAchiveCount', sql.Int, ReqData[0].DAchiveCount)
            .input('p_Remark', sql.NVarChar(100), ReqData[0].Remark)
            .input('p_IsActive', sql.VarChar, ReqData[0].IsActive)
            .input('p_UpdUser', sql.NVarChar(50), ReqData[0].UpdUser)
            .input('p_UpdDate', sql.Date, ReqData[0].UpdDate)
            .query(sqlQueries.UpdDesignationMaster);

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

const DeleteDesignationData = async (ReqData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('DesignationMaster');
        const DeleteData = await pool.request()
            .input('p_DId', sql.Int, ReqData[0].DId)
            .query(sqlQueries.DeleteDesignationMaster);

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
    GetDesignationData,
    AddDesignationData,
    UpdDesignationData,
    DeleteDesignationData
}