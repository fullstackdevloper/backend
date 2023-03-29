'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class FYGFDPUN extends Model {}
  
  FYGFDPUN.init({
    closetime: DataTypes.DATE,
    closeprice: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'FYGFDPUN',
    timestamps: false,
    tableName: 'FYGFDPUN',
  });
  
  return FYGFDPUN;
};