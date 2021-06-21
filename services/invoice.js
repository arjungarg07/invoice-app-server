// # All the business logic is here
const { Op } = require("sequelize");
const { Invoice, Item } = require("../models");
const Items = require("./items");
class Invoices {
  constructor() {}

  paymentMethods = ['Credit','UPI','NetBanking'];

  async create(data) {
    try {
      const {referenceNumber, buyerName,buyerEmail, sellerName, sellerAddress, totalItem, totalCost, paymentType, status, items} = data;
      // validation check
      if (!this.paymentMethods.includes(paymentType))
        return {success: false, msg: "Payment Method Not Supported"};

      const result = await Invoice.create({referenceNumber, buyerName, buyerEmail, sellerName, sellerAddress, totalItem, totalCost, status, paymentType});

      const itemResult = await Items.create(referenceNumber,items);
      if (!itemResult.success)
        return itemResult;

      return {success:true, msg: "Invoice successfully created"};
    } catch (err) {
      console.log(err);
      return {success:false, msg: "Invoice creation unsuccessful"};
    }
  }

  async get(referenceNumber) {
    try{
      const findInvoice = await Invoice.findOne({
        where: {
          referenceNumber: referenceNumber,
          active: 1,
        },
      });
      console.log(findInvoice);
      if (!findInvoice) {
        return {success: false, msg: 'Invoice not found'}
      }
      const findItems = await Items.get(referenceNumber);
      const mergedData = {findInvoice, items: findItems.data};
      return {success: true, msg: 'Invoice found', data: mergedData}
    } catch (err) {
      console.log(err);

    }  
  }
  async update(referenceNumber, data) {
    const {buyerName,  buyerAddress, sellerName, sellerAddress, totalItem, totalCost, paymentType} = data;
    try {
      const findResult = await Invoice.findOne({
        where: {
          referenceNumber: referenceNumber,
          active: 1,
        },
      });
      if (!findResult)
        return {success: false, msg: "Invoice not Found"};

      const result = await Invoice.update(
        { 
          ...(buyerName && { buyerName }),
          ...(buyerAddress && { buyerAddress }),
          ...(sellerName && { sellerName }),
          ...(sellerAddress && { sellerAddress }),
          ...(totalItem && { totalItem }),
          ...(totalCost && { totalCost }),
          ...(paymentType && { paymentType })
  
        }, // Short Circuit Evaluation 
        {
          where: {
            referenceNumber: referenceNumber,
            active: 1,
          },
        }
      );
      console.log(result);
      return {success: true, msg: 'successfully updated Invoice'};
    } catch (err) {
      console.log(err);
      return {success: false, msg: 'Invoice update unsuccessful'};
    }
  }
  
}

module.exports = new Invoices();
