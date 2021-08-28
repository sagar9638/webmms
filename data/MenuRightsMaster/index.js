'use strict';

const utils = require('../../global/utils');
const config = require('../../config');
const sql = require('mssql');


const GetMenuRightsMasterData = async (p_Condition) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('MenuRightsMaster');
        const list = await pool.request()
            .input('p_Condition', sql.NVarChar(sql.MAX), p_Condition)
            .query(sqlQueries.GetMenuRightsMasterData);
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}



const AddMenuRightsMaster = async (ReqData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('MenuRightsMaster');
        const AddData = await pool.request()
            .input('p_UserId', sql.VarChar, ReqData[0].p_UserId)
            .input('p_DId', sql.Int, ReqData[0].p_DId)
            .input('p_MId', sql.Int, ReqData[0].p_MId)
            .input('p_PId', sql.NVarChar(50), ReqData[0].p_PId)
            .input('p_Ord', sql.Decimal(10,2), ReqData[0].p_Ord)
            .input('p_Remark', sql.NVarChar(100), ReqData[0].p_Remark)
            .input('p_EntUser', sql.NVarChar(50), ReqData[0].p_EntUser)
            .input('p_EntDate', sql.Date, ReqData[0].p_EntDate)
            .query(sqlQueries.AddMenuRightsMaster);

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


const UpdMenuRightsMaster = async (ReqData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('MenuRightsMaster');
        const UpdData = await pool.request()
            .input('p_Id', sql.Int, ReqData[0].p_Id)
            .input('p_UserId', sql.NVarChar(50), ReqData[0].p_UserId)
            .input('p_DId', sql.Int, ReqData[0].p_DId)
            .input('p_MId', sql.Int, ReqData[0].p_MId)
            .input('p_PId', sql.NVarChar(50), ReqData[0].p_PId)
            .input('p_Ord', sql.Decimal(10,2), ReqData[0].p_Ord)
            .input('p_Remark', sql.NVarChar(100), ReqData[0].p_Remark)
            .input('p_UpdUser', sql.NVarChar(50), ReqData[0].p_UpdUser)
            .input('p_UpdDate', sql.Date, ReqData[0].p_UpdDate)
            .query(sqlQueries.UpdMenuRightsMaster);

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

const DeleteMenuRightsMaster = async (ReqData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('MenuRightsMaster');
        const DeleteData = await pool.request()
            .input('p_Id', sql.Int, ReqData[0].p_Id)
            .query(sqlQueries.DeleteMenuRightsMaster);

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
    GetMenuRightsMasterData,
    AddMenuRightsMaster,
    UpdMenuRightsMaster,
    DeleteMenuRightsMaster
}