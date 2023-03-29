'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WILL5000PRFC extends Model {}
  
  WILL5000PRFC.init({
    closetime: DataTypes.DATE,
    closeprice: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'WILL5000PRFC',
    timestamps: false,
    tableName: 'WILL5000PRFC',
  });
  
  return WILL5000PRFC;
};