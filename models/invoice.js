
module.exports = (sequelize, DataTypes) => {
    const Invoice =  sequelize.define(
      "Invoice",
      {
        id: {
          type: DataTypes.BIGINT,
          primaryKey: true,
          autoIncrement: true,
        },
        paymentType: {
          type: DataTypes.STRING,
        },
        referenceNumber: {
            foreignKey: true,
            type: DataTypes.INTEGER,
            allowNull: false
        },
        buyerName: {
          type: DataTypes.STRING,
        },
        buyerEmail: {
          type: DataTypes.STRING,
        },
        sellerName: {
            type: DataTypes.STRING,
        },
        sellerAddress: {
            type: DataTypes.STRING,
        },
        totalItem: {
            type: DataTypes.INTEGER,
        },
        totalCost: {
            type: DataTypes.INTEGER
        },
        status: {
          type: DataTypes.STRING,
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