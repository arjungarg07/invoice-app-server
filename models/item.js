const Invoice = require('./invoice');
module.exports = (sequelize, DataTypes) => {
    const Item =  sequelize.define(
      "Item",
      {
        id: {
          type: DataTypes.BIGINT,
          primaryKey: true,
          autoIncrement: true,
        },
        referenceNumber: {
            type: DataTypes.INTEGER,
        },
        title: {
          type: DataTypes.STRING,
        },
        quantity: {
          type: DataTypes.INTEGER,
        },
        unitPrice: {
          type: DataTypes.INTEGER,
        },
        netAmount: {
          type: DataTypes.INTEGER,
        }
      },
      {
        tableName: "items",
      }
    );
    return Item;
  };