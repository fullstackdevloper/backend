'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SP500 extends Model {}
  
  SP500.init({
    closetime: DataTypes.DATE,
    closeprice: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'SP500',
    timestamps: false,
    tableName: 'SP500',
  });
  
  return SP500;
};
