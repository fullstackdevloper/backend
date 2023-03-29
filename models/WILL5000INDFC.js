'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WILL5000INDFC extends Model {}
  
  WILL5000INDFC.init({
    closetime: DataTypes.DATE,
    closeprice: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'WILL5000INDFC',
    timestamps: false,
    tableName: 'WILL5000INDFC',
  });
  
  return WILL5000INDFC;
};