'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DJIA extends Model {}
  
  DJIA.init({
    closetime: DataTypes.DATE,
    closeprice: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'DJIA',
    timestamps: false,
    tableName: 'DJIA',
  });
  
  return DJIA;
};
