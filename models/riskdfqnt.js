'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class riskdfqnt extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  riskdfqnt.init({
    closetime:DataTypes.STRING,
    closeprice:DataTypes.STRING,
    udpil:DataTypes.TEXT,
    udpim:DataTypes.TEXT,
    udpis:DataTypes.TEXT,
    mbi:DataTypes.TEXT,
    tci:DataTypes.TEXT,
    tcicv:DataTypes.TEXT,
    mdccv:DataTypes.TEXT,
    mdcdp:DataTypes.TEXT,
    volume:DataTypes.TEXT,
    mc:DataTypes.TEXT,
    cs:DataTypes.TEXT,
    // aa:DataTypes.STRING,
  },
   {
    sequelize,
    timestamps: false,
    tableName: 'riskdfqnt',
    modelName: 'riskdfqnt',
  });
  return riskdfqnt;
};