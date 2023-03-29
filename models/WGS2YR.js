'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class WGS2YR extends Model {}
  
  WGS2YR.init({
    closetime: DataTypes.DATE,
    closeprice: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'WGS2YR',
    timestamps: false,
    tableName: 'WGS2YR',
  });
  
  return WGS2YR;
};