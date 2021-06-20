// # Database models using Sequelize ORM
const Sequelize = require("sequelize");
const { db } = require("../config/default");

const InvoiceModel = require("./invoice");

const databaseOptions = db.development;

const sequelize = new Sequelize({
  ...databaseOptions,
  dialect: "mysql",
  database: "mydb",
});

const Invoice = InvoiceModel(sequelize, Sequelize);

sequelize
  .sync({ alter: false })
  .then(() => {
    console.log(`Database and Tables Created`);
  })
  .catch((error) => console.log(error, "error"));

module.exports = {
  Invoice,
};