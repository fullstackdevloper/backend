'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class FDHBFIN extends Model {}
  
  FDHBFIN.init({
    closetime: DataTypes.DATE,
    closeprice: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'FDHBFIN',
    timestamps: false,
    tableName: 'FDHBFIN',
  });
  
  return FDHBFIN;
};