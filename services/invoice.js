// # All the business logic is here
const { Op } = require("sequelize");
const { Invoice } = require("../models");
const Items = require("./items");
class Invoices {
  constructor() {}

  paymentMethods = ['Credit','UPI','NetBanking'];

  async create(data) {
    try {
      const {referenceNumber, buyerName, sellerName, sellerAddress, totalItem, totalCost, paymentType, items} = data;
      if (!this.paymentMethods.includes(paymentType))
        return {success: 0, msg: "Payment Method Not Supported"};
      const result = await Invoice.create({referenceNumber, buyerName, sellerName, sellerAddress, totalItem, totalCost, paymentType});
      console.log(result);
      const itemResult = await Items.create(referenceNumber,items);
      if (itemResult.success === 0)
        return itemResult;

      return {success:1, msg: "Invoice successfully created"};
    } catch (err) {
      console.log(err);
    }
  }
  
}

module.exports = new Invoices();
