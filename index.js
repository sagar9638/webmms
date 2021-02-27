'use strict';
const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const UserMasterRoutes = require('./routes/UserMasterRoutes');
const MenuMasterRoutes = require('./routes/MenuMasterRoutes');
const DesignationMasterRoutes = require('./routes/DesignationMasterRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api',UserMasterRoutes.routes);
app.use('/api',MenuMasterRoutes.routes);
app.use('/api',DesignationMasterRoutes.routes);

app.listen(config.port, ()=> console.log('Server is listening on http://localhost:' + config.port));
