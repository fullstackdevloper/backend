'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CORBLACBS extends Model {}
  
  CORBLACBS.init({
    closetime: DataTypes.DATE,
    closeprice: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'CORBLACBS',
    timestamps: false,
    tableName: 'CORBLACBS',
  });
  
  return CORBLACBS;
};