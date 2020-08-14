const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const controller = require('./controller/controller');

const api = express();

api.use(bodyParser.json());
api.use(cors());
api.use('/control', controller);

api.listen(3000,()=>{
    console.log("Restfull started successfully......");
})