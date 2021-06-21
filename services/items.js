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
        console.log(result);
    } catch (err) {
        console.log(err);
    }
    return;
  }
}

module.exports = new Items();
