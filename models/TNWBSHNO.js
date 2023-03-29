'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TNWBSHNO extends Model {}
  
  TNWBSHNO.init({
    closetime: DataTypes.DATE,
    closeprice: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'TNWBSHNO',
    timestamps: false,
    tableName: 'TNWBSHNO',
  });
  
  return TNWBSHNO;
};