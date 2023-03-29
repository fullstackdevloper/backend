'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class WGS10YR extends Model {}
  
  WGS10YR.init({
    closetime: DataTypes.DATE,
    closeprice: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'WGS10YR',
    timestamps: false,
    tableName: 'WGS10YR',
  });
  
  return WGS10YR;
};