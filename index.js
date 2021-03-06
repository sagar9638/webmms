'use strict';
const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');

const UserMasterRoutes = require('./routes/UserMasterRoutes');
const MenuMasterRoutes = require('./routes/MenuMasterRoutes');
const DesignationMasterRoutes = require('./routes/DesignationMasterRoutes');
const DesignationDetailRoutes = require('./routes/DesignationDetailRoutes');
const UserProfileRoutes = require('./routes/UserProfileRoutes');
const CommonRoutes = require('./routes/CommonRoutes');
const MenuRightsMasterRoutes = require('./routes/MenuRightsMasterRoutes');
const GalleryMasterRoutes = require('./routes/GalleryMasterRoutes');
const EventMasterRoutes = require('./routes/EventMasterRoutes');
const CategoryMasterRoutes = require('./routes/CategoryMasterRoutes');
const NewsMasterRouter = require('./routes/NewsMasterRouter');


const app = express();

 app.use(cors());
 app.use(bodyParser.json());

app.use('/api',UserMasterRoutes.routes);
app.use('/api',MenuMasterRoutes.routes);
app.use('/api',DesignationMasterRoutes.routes);
app.use('/api',DesignationDetailRoutes.routes);
app.use('/api',UserProfileRoutes.routes);
app.use('/api',CommonRoutes.routes);
app.use('/api',MenuRightsMasterRoutes.routes);
app.use('/api',GalleryMasterRoutes.routes);
app.use('/api',EventMasterRoutes.routes);
app.use('/api',CategoryMasterRoutes.routes);
app.use('/api',NewsMasterRouter.routes);

app.listen(config.port, ()=> console.log('Server is listening on http://localhost:' + config.port));
