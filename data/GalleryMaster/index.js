'use strict';

const utils = require('../../global/utils');
const config = require('../../config');
const sql = require('mssql');


const GetGalleryMasterData = async (p_Condition) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('GalleryMaster');
        const list = await pool.request()
            .input('p_Condition', sql.NVarChar(sql.MAX), p_Condition)
            .query(sqlQueries.GetGalleryMasterData);
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}

const AddGalleryMaster = async (ReqData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('GalleryMaster');
        const AddData = await pool.request()
            .input('p_FileName', sql.NVarChar(120), ReqData[0].p_FileName)
            .input('p_FileType', sql.NVarChar(50), ReqData[0].p_FileType)
            .input('p_FileSize', sql.NVarChar(50), ReqData[0].p_FileSize)
            .input('p_Path', sql.NVarChar(1000), ReqData[0].p_Path)
            .input('p_SrcPath', sql.NVarChar(sql.MAX), ReqData[0].p_SrcPath)
            .input('p_PageName', sql.NVarChar(100), ReqData[0].p_PageName)
            .input('p_PageType', sql.NVarChar(100), ReqData[0].p_PageType)
            .input('p_Category', sql.NVarChar(100), ReqData[0].p_Category)
            .input('p_Ord', sql.Decimal(10,2), ReqData[0].p_Ord)
            .input('p_Remark', sql.NVarChar(100), ReqData[0].p_Remark)
            .input('p_DeleteFlag', sql.VarChar, ReqData[0].p_DeleteFlag)
            .input('p_EntDate', sql.Date, ReqData[0].p_EntDate)
            .input('p_EntUser', sql.NVarChar(50), ReqData[0].p_EntUser)
            .query(sqlQueries.AddGalleryMaster);

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

const DeleteGalleryMaster = async (ReqData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('GalleryMaster');
        const DeleteData = await pool.request()
            .input('p_Id', sql.Int, ReqData[0].p_Id)
            .input('p_UpdUser', sql.NVarChar(50), ReqData[0].p_UpdUser)
            .input('p_UpdDate', sql.Date, ReqData[0].p_UpdDate)
            .query(sqlQueries.DeleteGalleryMaster);

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
    GetGalleryMasterData,
    AddGalleryMaster,
    DeleteGalleryMaster
}