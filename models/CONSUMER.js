'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CONSUMER extends Model {}
  
  CONSUMER.init({
    closetime: DataTypes.DATE,
    closeprice: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'CONSUMER',
    timestamps: false,
    tableName: 'CONSUMER',
  });
  
  return CONSUMER;
};