const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const PORT = process.env.PORT || 8000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false,}));

app.listen(PORT,()=>{
    console.log(`Server up and running on PORT:${PORT}`);
})