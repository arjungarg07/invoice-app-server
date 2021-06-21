// # Jobs definitions for agenda.js
const cron = require("node-cron");
const { Invoice } = require("../models");
const alertMail = require('../alertMail');

const task = cron.schedule("0 2 * * 2", async () => {
  console.log("At 02:00 on Tuesday.");
  try {
    const Invoices =  await Invoice.findAll({
        where: {
            status: 0, //unpaid Invoice status
            active: 1
        },
        order: [["id", "DESC"]],
        attributes: ["status", "totalCost", "buyerEmail", "referenceNumber"],
    })
    for (invoice of Invoices) {
        await alertMail(referenceNumber, buyerEmail);
    }
  } catch (err) {
      console.log(err);
  }
});

module.exports = task;
