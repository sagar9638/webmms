'use strict';
const express = require('express');
const config = require('./config');
//const cors = require('cors');
const bodyParser = require('body-parser');
const UserMasterRoutes = require('./routes/UserMasterRoutes');
const MenuMasterRoutes = require('./routes/MenuMasterRoutes');
const DesignationMasterRoutes = require('./routes/DesignationMasterRoutes');
const DesignationDetailRoutes = require('./routes/DesignationDetailRoutes');

const app = express();

//app.use(cors());
//app.use(cors());
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use('/api',UserMasterRoutes.routes);
app.use('/api',MenuMasterRoutes.routes);
app.use('/api',DesignationMasterRoutes.routes);
app.use('/api',DesignationDetailRoutes.routes);


app.listen(config.port, ()=> console.log('Server is listening on http://localhost:' + config.port));
