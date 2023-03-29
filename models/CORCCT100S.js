
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CORCCT100S extends Model {}
  
  CORCCT100S.init({
    closetime: DataTypes.DATE,
    closeprice: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'CORCCT100S',
    timestamps: false,
    tableName: 'CORCCT100S',
  });
  
  return CORCCT100S;
};
