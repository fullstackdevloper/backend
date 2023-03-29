'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NASDAQ100 extends Model {}
  
  NASDAQ100.init({
    closetime: DataTypes.DATE,
    closeprice: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'NASDAQ100',
    timestamps: false,
    tableName: 'NASDAQ100',
  });
  
  return NASDAQ100;
};