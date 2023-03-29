'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class GFDGDPA188S extends Model {}
  
  GFDGDPA188S.init({
    closetime: DataTypes.DATE,
    closeprice: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'GFDGDPA188S',
    timestamps: false,
    tableName: 'GFDGDPA188S',
  });
  
  return GFDGDPA188S;
};