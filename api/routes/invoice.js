const { Router } = require("express");

const Invoices = require("../../services/invoice");

const route = Router();

route.get('/invoice', async (req,res) => {
    console.log('Testing');
    res.send({success: true});
})

route.post('/invoice', async (req,res) => {
    const invoiceData = req.body;
    const result = await Invoices.create(invoiceData); 
    if (result.success) {
        res.send({success: false, msg: "Invoice successfully created"});
    } else {
        res.send({success: false}, result.msg);
    }
})

route.patch("/invoice/:referenceId", async (req,res) => {
    const {referenceId} = req.params;
    const updateData = req.body;
    const result = await Invoices.update(referenceId,updateData);
    if (result.success) {
        res.send({success: false, msg: "Invoice successfully updated"});
    } else {
        res.send({success: false, msg: result.msg});
    }
})

module.exports = route;