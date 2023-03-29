'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class WGS3MO extends Model {}
  
  WGS3MO.init({
    closetime: DataTypes.DATE,
    closeprice: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'WGS3MO',
    timestamps: false,
    tableName: 'WGS3MO',
  });
  
  return WGS3MO;
};