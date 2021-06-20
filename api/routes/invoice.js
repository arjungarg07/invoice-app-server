const { Router } = require("express");

const InvoiceService = require("../../services/InvoiceService");

const route = Router();

route.get('/invoice', async (req,res) => {
    console.log('Testing');
    res.send({success: 1});
})

module.exports = route;