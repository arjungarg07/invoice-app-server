const { Router } = require("express");

const Invoice = require("../../services/invoice");

const route = Router();

route.get('/invoice', async (req,res) => {
    console.log('Testing');
    res.send({success: 1});
})

module.exports = route;