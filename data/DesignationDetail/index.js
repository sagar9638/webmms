'use strict';

const utils = require('../../global/utils');
const config = require('../../config');
const sql = require('mssql');


const GetDesignationDetailData = async (p_Condition) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('DesignationDetail');
        const list = await pool.request()
            .input('p_Condition', sql.NVarChar(sql.MAX), p_Condition)
            .query(sqlQueries.GetDesignationDetailData);
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}

const AddDesignationDetailData = async (ReqData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('DesignationDetail');
        const AddData = await pool.request()
            .input('p_DId', sql.Int, ReqData[0].p_DId)
            .input('p_MId', sql.Int, ReqData[0].p_MId)
            .input('p_EntUser', sql.Int, ReqData[0].p_EntUser)
            .query(sqlQueries.AddDesignationDetailData);

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


module.exports = {
    GetDesignationDetailData,
    AddDesignationDetailData
 }

