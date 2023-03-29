'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class GFDEGDQ188S extends Model {}
  
  GFDEGDQ188S.init({
    closetime: DataTypes.DATE,
    closeprice: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'GFDEGDQ188S',
    timestamps: false,
    tableName: 'GFDEGDQ188S',
  });
  
  return GFDEGDQ188S;
};