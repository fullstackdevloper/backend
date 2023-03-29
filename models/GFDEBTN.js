'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class GFDEBTN extends Model {}
  
  GFDEBTN.init({
    closetime: DataTypes.DATE,
    closeprice: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'GFDEBTN',
    timestamps: false,
    tableName: 'GFDEBTN',
  });
  
  return GFDEBTN;
};