const { Router } = require("express");

const Invoices = require("../../services/invoice");

const route = Router();

route.get('/invoice', async (req,res) => {
    console.log('Testing');
    res.send({success: 1});
})

route.post('/invoice', async (req,res) => {
    const invoiceData = req.body;
    const result = Invoices.create(invoiceData); 
    res.send({success: 1, msg: "Invoice successfully created"});
})

module.exports = route;