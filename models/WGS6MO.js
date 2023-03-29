
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class WGS6MO extends Model {}
  
  WGS6MO.init({
    closetime: DataTypes.DATE,
    closeprice: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'WGS6MO',
    timestamps: false,
    tableName: 'WGS6MO',
  });
  
  return WGS6MO;
};