// # All the business logic is here
const { Op } = require("sequelize");
const { Item } = require("../models");
const item = require("../models/item");

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
}

module.exports = new Items();
