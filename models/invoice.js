
module.exports = (sequelize, DataTypes) => {
    const Invoice =  sequelize.define(
      "Invoice",
      {
        id: {
          type: DataTypes.BIGINT,
          primaryKey: true,
          autoIncrement: true,
        },
        referenceNumber: {
            foreignKey: true,
            type: DataTypes.INTEGER,
            allowNull: false
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
    return Invoice;
  };