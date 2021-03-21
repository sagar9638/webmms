'use strict';

const utils = require('../../global/utils');
const config = require('../../config');
const sql = require('mssql');
const nodemailer = require('nodemailer');

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

const GetAchievementData = async (p_Condition) => {
  try {
      let pool = await sql.connect(config.sql);
      const sqlQueries = await utils.loadSqlQueries('Common');
      const list = await pool.request()
      .input('p_Condition', sql.NVarChar(sql.MAX), p_Condition)
      .query(sqlQueries.GetAchievementData);
      return list.recordset;
  } catch (error) {
      return error.message;
  }
}


// var transporter = nodemailer.createTransport({
//      //service: 'gmail',
//      //secure: false,
//     // port: 587,//465
//     // auth: {
//     //   user: 'psagarj111@gmail.com',
//     //   pass: '5Agar9638'
//     // },
//     // tls: {
//     //     rejectUnauthorized: false
//     //   }
//     //greetingTimeout : 1000 * 5, // try adding greetingTimeout property 
//    address:              'smtp.gmail.com',
//   port:                 8585,
//   domain:               'gmail.com',
//   user_name:            'psagarj111@gmail.com',
//   password:             '5Agar9638',
//   authentication:       'plain'
//   });
  
//   var mailOptions = {
//     from: 'psagarj111@gmail.com',
//     to: 'yup9698@gmail.com',
//     subject: 'Sending Email using Node.js',
//     text: 'That was easy!'
//   };    

// const SendVerificationMail = async (ReqData) => {
//     try {
//         // let pool = await sql.connect(config.sql);
//         // const sqlQueries = await utils.loadSqlQueries('Common');
//         // const list = await pool.request()
//         // .input('p_Condition', sql.NVarChar(sql.MAX), p_Condition)
//         // .query(sqlQueries.GetMenuRightsData);
//         // return list.recordset;

//       transporter.sendMail(mailOptions, function(error, info){
//             if (error) {
//               console.log(error);
//             } else {
//               console.log('Email sent: ' + info.response);
//             }
//           });
//     } catch (error) {
//         return error.message;
//     }
// }



module.exports = {
    GetMenuRightsData,
    GetAchievementData
}

