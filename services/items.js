// # All the business logic is here
const { Op } = require("sequelize");
const { Item } = require("../models");

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

}

module.exports = new Items();
