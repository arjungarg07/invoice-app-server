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
            type: DataTypes.INT,
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
            type: DataTypes.INT,
        },
        totalCost: {
            type: DataTypes.INT
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