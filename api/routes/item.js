const { Router } = require("express");

const Invoices = require("../../services/invoice");
const Items = require("../../services/items");

const route = Router();

route.post('/invoice/item/:referenceId', async (req,res) => {
    const {referenceId} = req.params;
    const data = req.body;
    const result = await Items.add(referenceId,data);
    if (result.success) {
        res.send({success: true, msg: "Invoice item added successfully"});
    } else {
        res.send({success: false, msg: result.msg});
    }
})


module.exports = route;