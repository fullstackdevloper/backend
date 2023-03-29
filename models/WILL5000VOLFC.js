'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WILL5000VOLFC extends Model {}
  
  WILL5000VOLFC.init({
    closetime: DataTypes.DATE,
    closeprice: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'WILL5000VOLFC',
    timestamps: false,
    tableName: 'WILL5000VOLFC',
  });
  
  return WILL5000VOLFC;
};