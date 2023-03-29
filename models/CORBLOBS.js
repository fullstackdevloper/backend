'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CORBLOBS extends Model {}
  
  CORBLOBS.init({
    closetime: DataTypes.DATE,
    closeprice: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'CORBLOBS',
    timestamps: false,
    tableName: 'CORBLOBS',
  });
  
  return CORBLOBS;
};