'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class FYFSD extends Model {}
  
  FYFSD.init({
    closetime: DataTypes.DATE,
    closeprice: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'FYFSD',
    timestamps: false,
    tableName: 'FYFSD',
  });
  
  return FYFSD;
};
