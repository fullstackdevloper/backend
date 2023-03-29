'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TCMDO extends Model {}
  
  TCMDO.init({
    closetime: DataTypes.DATE,
    closeprice: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'TCMDO',
    timestamps: false,
    tableName: 'TCMDO',
  });
  
  return TCMDO;
};