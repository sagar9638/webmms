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
            .input('p_MRefId', sql.Int, ReqData[0].MRefId)
            .input('p_MTitle', sql.NVarChar(80), ReqData[0].MTitle)
            .input('p_MName', sql.NVarChar(80), ReqData[0].MName)
            .input('p_MPath', sql.NVarChar(120), ReqData[0].MPath)
            .input('p_MIcon', sql.NVarChar(50), ReqData[0].MIcon)
            .input('p_Remark', sql.NVarChar(100), ReqData[0].Remark)
            .input('p_IsActive', sql.NVarChar(6), ReqData[0].IsActive)
            .input('p_EntUser', sql.NVarChar(50), ReqData[0].EntUser)
            .input('p_EntDate', sql.Date, ReqData[0].EntDate)
            .query(sqlQueries.AddMenuMaster);

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
            .input('p_MId', sql.Int, ReqData[0].MId)
            .input('p_MRefId', sql.Int, ReqData[0].MRefId)
            .input('p_MTitle', sql.NVarChar(80), ReqData[0].MTitle)
            .input('p_MName', sql.NVarChar(80), ReqData[0].MName)
            .input('p_MPath', sql.NVarChar(120), ReqData[0].MPath)
            .input('p_MIcon', sql.NVarChar(50), ReqData[0].MIcon)
            .input('p_Remark', sql.NVarChar(100), ReqData[0].Remark)
            .input('p_IsActive', sql.NVarChar(6), ReqData[0].IsActive)
            .input('p_UpdUser', sql.NVarChar(50), ReqData[0].UpdUser)
            .input('p_UpdDate', sql.Date, ReqData[0].UpdDate)
            .query(sqlQueries.UpdMenuMaster);

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
            .input('p_MId', sql.Int, ReqData[0].MId)
            .query(sqlQueries.DeleteMenuMaster);

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