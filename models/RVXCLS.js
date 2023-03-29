'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RVXCLS extends Model {}
  
  RVXCLS.init({
    closetime: DataTypes.DATE,
    closeprice: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'RVXCLS',
    timestamps: false,
    tableName: 'RVXCLS',
  });
  
  return RVXCLS;
};