'use strict';

const utils = require('../../global/utils');
const config = require('../../config');
const sql = require('mssql');


const GetCategoryMasterData = async (p_Condition) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('CategoryMaster');
        const list = await pool.request()
            .input('p_Condition', sql.NVarChar(sql.MAX), p_Condition)
            .query(sqlQueries.GetCategoryMasterData);
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}



const AddCategoryMasterData = async (ReqData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('CategoryMaster');
        const AddData = await pool.request()
            .input('p_CName', sql.NVarChar(100), ReqData[0].p_CName)
            .input('p_CShortName', sql.NVarChar(30), ReqData[0].p_CShortName)
            .input('p_CType', sql.NVarChar(100), ReqData[0].p_CType)
            .input('p_CPageName', sql.NVarChar(200), ReqData[0].p_CPageName)
            .input('p_CPageType', sql.NVarChar(100), ReqData[0].p_CPageType)
            .input('p_CDetail', sql.NVarChar(sql.MAX), ReqData[0].p_CDetail)
            .input('p_CStatusFlag', sql.NVarChar(10), ReqData[0].p_CStatusFlag)
            .input('p_CConfirmFlag', sql.NVarChar(10), ReqData[0].p_CConfirmFlag)
            .input('p_IsActive', sql.NVarChar(10), ReqData[0].p_IsActive)
            .input('p_Ord', sql.Decimal(18, 2), ReqData[0].p_Ord)
            .input('p_Remark', sql.NVarChar(300), ReqData[0].p_Remark)
            .input('p_EntDate', sql.Date, ReqData[0].p_EntDate)
            .input('p_EntUser', sql.NVarChar(50), ReqData[0].p_EntUser)
            .query(sqlQueries.AddCategoryMasterData);

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


const UpdCategoryMasterData = async (ReqData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('CategoryMaster');
        const UpdData = await pool.request()
            .input('p_Id', sql.Int, ReqData[0].p_Id)
            .input('p_CName', sql.NVarChar(100), ReqData[0].p_CName)
            .input('p_CShortName', sql.NVarChar(30), ReqData[0].p_CShortName)
            .input('p_CType', sql.NVarChar(100), ReqData[0].p_CType)
            .input('p_CPageName', sql.NVarChar(200), ReqData[0].p_CPageName)
            .input('p_CPageType', sql.NVarChar(100), ReqData[0].p_CPageType)
            .input('p_CDetail', sql.NVarChar(sql.MAX), ReqData[0].p_CDetail)
            .input('p_CStatusFlag', sql.NVarChar(10), ReqData[0].p_CStatusFlag)
            .input('p_CConfirmFlag', sql.NVarChar(10), ReqData[0].p_CConfirmFlag)
            .input('p_IsActive', sql.NVarChar(10), ReqData[0].p_IsActive)
            .input('p_Ord', sql.Decimal(18, 2), ReqData[0].p_Ord)
            .input('p_Remark', sql.NVarChar(300), ReqData[0].p_Remark)
            .input('p_UpdUser', sql.NVarChar(50), ReqData[0].p_UpdUser)
            .input('p_UpdDate', sql.Date, ReqData[0].p_UpdDate)
            .query(sqlQueries.UpdCategoryMasterData);

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

const DeleteCategoryMasterData = async (ReqData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('CategoryMaster');
        const DeleteData = await pool.request()
            .input('p_Id', sql.Int, ReqData[0].p_Id)
            .query(sqlQueries.DeleteCategoryMasterData);

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
    GetCategoryMasterData,
    AddCategoryMasterData,
    UpdCategoryMasterData,
    DeleteCategoryMasterData
}