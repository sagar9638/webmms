'use strict';

const utils = require('../../global/utils');
const config = require('../../config');
const sql = require('mssql');


const GetMenuRightsData = async (p_Condition) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Common');
        const list = await pool.request()
        .input('p_Condition', sql.NVarChar(sql.MAX), p_Condition)
        .query(sqlQueries.GetMenuRightsData);
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    GetMenuRightsData
}