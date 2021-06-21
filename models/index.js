// # Database models using Sequelize ORM
const Sequelize = require("sequelize");
const db  = require("../config/index");

const InvoiceModel = require("./invoice");
const ItemModel = require("./item");

const databaseOptions = db.development;

const sequelize = new Sequelize({
  ...databaseOptions,
  dialect: "mysql",
  database: "mydb",
});

const Invoice = InvoiceModel(sequelize, Sequelize);
const Item = ItemModel(sequelize, Sequelize);

// Invoice.hasMany(Item, { as: "items" });
// Item.belongsTo(Invoice,{
//   foreignKey: "referenceNumber",
//   as: "invoiceId"
// });
// Item.belongsTo(Invoice, {foreignKey: 'referenceNumber'});
sequelize
  .sync({ force: true })
  .then(() => {
    console.log(`Database and Tables Created`);
  })
  .catch((error) => console.log(error, "error"));

module.exports = {
  Invoice,
  Item
};