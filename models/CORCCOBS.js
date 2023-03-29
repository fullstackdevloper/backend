'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CORCCOBS extends Model {}
  
  CORCCOBS.init({
    closetime: DataTypes.DATE,
    closeprice: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'CORCCOBS',
    timestamps: false,
    tableName: 'CORCCOBS',
  });
  
  return CORCCOBS;
};