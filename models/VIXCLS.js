'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VIXCLS extends Model {}
  
  VIXCLS.init({
    closetime: DataTypes.DATE,
    closeprice: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'VIXCLS',
    timestamps: false,
    tableName: 'VIXCLS',
  });
  
  return VIXCLS;
};