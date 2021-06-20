module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      "Invoice",
      {
        id: {
          type: DataTypes.BIGINT,
          primaryKey: true,
          autoIncrement: true,
        },
        referenceNumber: {
            type: DataTypes.INTEGER,
        },
        buyerName: {
          type: DataTypes.STRING,
        },
        sellerName: {
            type: DataTypes.STRING,
        },
        sellerAddress: {
            type: DataTypes.STRING,
        },
        invoiceDate: {
          type: DataTypes.DATEONLY,
          allowNull: false,
        },
        paymentDueDate: {
          type: DataTypes.DATEONLY,
        },
        totalItem: {
            type: DataTypes.INTEGER,
        },
        totalCost: {
            type: DataTypes.INTEGER
        },
        deliveryDate: {
            type: DataTypes.DATEONLY,
        },
        active: {
          type: DataTypes.TINYINT,
          defaultValue: 1,
        },
      },
      {
        tableName: "invoices",
      }
    );
  };