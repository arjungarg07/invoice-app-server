// # All the business logic is here
const { Op } = require("sequelize");
const { Item, Invoice } = require("../models");

class Items {
  constructor() {}

  async create(referenceNumber,items) {
    try {
        const newItems = items.map(item => ({...item, referenceNumber}))
        const result = await Item.bulkCreate(newItems);
        return {success: true, msg: "Item added successfully"}
    } catch (err) {
        console.log(err);
        return {success: false, msg: "Error while creating item"}
    }
  }

  async get(referenceNumber) {
    try {
      const findItems = await Item.findAll({
        where: {
          referenceNumber: referenceNumber,
          active: 1
        },
        order: [["id", "DESC"]],
        attributes: ["title", "quantity", "unitPrice", "netAmount"],
      });
      console.log(findItems);
      return {success: true, msg: "Items found", data: findItems}
    } catch (err) {
        console.log(err);
        return {success: false, msg: "Error while creating item"}
    }
  }

  async add(referenceNumber,itemData) {
    // check for corresponding Invoice
    try{
      const findInvoice = await Invoice.findOne({
        where: {
          referenceNumber: referenceNumber,
        },
      });
      if (!findInvoice) {
        return {success: false, msg: 'Invoice of given referenceId not found'}
      }
      // check if item already exists with given referenceId
      const findItem = await Item.findOne({
        where: {
          referenceNumber: referenceNumber,
          title: itemData.title,
          active: 1
        }
      });
      if (findItem)
        return {success: false, msg: 'Item already exists, please try to update it'}

      itemData.referenceNumber = referenceNumber;
      const result = await Item.create(itemData);
      return {success: true, msg: 'Item added successfully'}
    }catch(err) {
      console.log(err);
    }
  }

  async update(referenceNumber, title, data) {
    const {quantity, unitPrice, netAmount } = data;
    try {
      const findResult = await Item.findOne({
        where: {
          referenceNumber: referenceNumber,
          title: title,
          active: 1
        },
      });
      if (!findResult)
        return {success: false, msg: "Item not Found"};

      const result = await Item.update(
        { 
          ...(quantity && { quantity }),
          ...(unitPrice && { unitPrice }),
          ...(netAmount && { netAmount }),
        }, // Short Circuit Evaluation 
        {
          where: {
            referenceNumber: referenceNumber,
            title: title,
          },
        }
      );
      console.log(result);
      return {success: true, msg: 'successfully updated Item'};
    } catch (err) {
      console.log(err);
      return {success: false, msg: 'Invoice update unsuccessful'};
    }
  }

  async delete(referenceNumber,title) {
    try {
      const findResult = await Item.findOne({
        where: {
          referenceNumber: referenceNumber,
          title: title,
          active: 1
        },
      });
      if (!findResult)
        return {success: false, msg: "Item not Found"};

      const result = await Item.update(
        { 
          active: 0 // soft delete
        },  
        {
          where: {
            referenceNumber: referenceNumber,
            title: title,
          },
        }
      );
        return {success: true, msg: "Item deleted successfully"}
    } catch (err) {
        console.log(err);
        return {success: false, msg: "Error while deleting item"}
    }
  }
}

module.exports = new Items();
