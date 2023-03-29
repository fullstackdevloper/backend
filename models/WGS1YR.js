
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class WGS1YR extends Model {}
  
  WGS1YR.init({
    closetime: DataTypes.DATE,
    closeprice: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'WGS1YR',
    timestamps: false,
    tableName: 'WGS1YR',
  });
  
  return WGS1YR;
};