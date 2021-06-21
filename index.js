const express = require('express');
const bodyParser = require('body-parser');
require("dotenv").config();

const route = require('./api/routes') 
const task = require("./jobs/cron");

const PORT = process.env.PORT || 8000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.raw({extended: false,}));

app.use('/',route);

task.start();

app.listen(PORT,()=>{
    console.log(`Server up and running on PORT:${PORT}`);
})