'use strict';

const utils = require('../../global/utils');
const config = require('../../config');
const sql = require('mssql');


const GetNewsMasterData = async (p_Condition) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('NewsMaster');
        const list = await pool.request()
            .input('p_Condition', sql.NVarChar(sql.MAX), p_Condition)
            .query(sqlQueries.GetNewsMasterData);
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}


const AddNewsMasterData = async (ReqData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('NewsMaster');
        const AddData = await pool.request()
        .input('p_Title', sql.NVarChar(500), ReqData[0].p_Title)
        .input('p_SubTitle', sql.NVarChar(300), ReqData[0].p_SubTitle)
        .input('p_Image', sql.NVarChar(sql.MAX), ReqData[0].p_Image)
        .input('p_Description', sql.NVarChar(sql.MAX), ReqData[0].p_Description)
        .input('p_ShortDescription', sql.NVarChar(400), ReqData[0].p_ShortDescription)
        .input('p_Category', sql.NVarChar(100), ReqData[0].p_Category)
        .input('p_NewsType', sql.NVarChar(100), ReqData[0].p_NewsType)
        .input('p_Ord', sql.Decimal(10,2), ReqData[0].p_Ord)
        .input('p_IsActive', sql.NVarChar(10), ReqData[0].p_IsActive)
        .input('p_EntDate', sql.Date, ReqData[0].p_EntDate)
        .input('p_EntUser', sql.NVarChar(50), ReqData[0].p_EntUser)
            .query(sqlQueries.AddNewsMasterData);

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


const UpdNewsMasterData = async (ReqData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('NewsMaster');
        console.log(ReqData);
        const UpdData = await pool.request()
        .input('p_Id', sql.Int, ReqData[0].p_Id)
        .input('p_Title', sql.NVarChar(500), ReqData[0].p_Title)
        .input('p_SubTitle', sql.NVarChar(300), ReqData[0].p_SubTitle)
        .input('p_Image', sql.NVarChar(sql.MAX), ReqData[0].p_Image)
        .input('p_Description', sql.NVarChar(sql.MAX), ReqData[0].p_Description)
        .input('p_ShortDescription', sql.NVarChar(400), ReqData[0].p_ShortDescription)
        .input('p_Category', sql.NVarChar(100), ReqData[0].p_Category)
        .input('p_NewsType', sql.NVarChar(100), ReqData[0].p_NewsType)
        .input('p_Ord', sql.Decimal(10,2), ReqData[0].p_Ord)
        .input('p_IsActive', sql.NVarChar(10), ReqData[0].p_IsActive)
        .input('p_UpdDate', sql.Date, ReqData[0].p_UpdDate)
        .input('p_UpdUser', sql.NVarChar(50), ReqData[0].p_UpdUser)
            .query(sqlQueries.UpdNewsMasterData);

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

const DeleteNewsMasterData = async (ReqData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('NewsMaster');
        const DeleteData = await pool.request()
            .input('p_Id', sql.Int, ReqData[0].p_Id)
            .query(sqlQueries.DeleteNewsMasterData);

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
    GetNewsMasterData,
    AddNewsMasterData,
    UpdNewsMasterData,
    DeleteNewsMasterData
}