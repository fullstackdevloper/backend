

'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class WGS5YR extends Model {}
  
  WGS5YR.init({
    closetime: DataTypes.DATE,
    closeprice: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'WGS5YR',
    timestamps: false,
    tableName: 'WGS5YR',
  });
  
  return WGS5YR;
};