'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class WALCL extends Model {}
  
  WALCL.init({
    closetime: DataTypes.DATE,
    closeprice: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'WALCL',
    timestamps: false,
    tableName: 'WALCL',
  });
  
  return WALCL;
};