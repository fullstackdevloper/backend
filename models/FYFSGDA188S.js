
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class FYFSGDA188S extends Model {}
  
  FYFSGDA188S.init({
    closetime: DataTypes.DATE,
    closeprice: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'FYFSGDA188S',
    timestamps: false,
    tableName: 'FYFSGDA188S',
  });
  
  return FYFSGDA188S;
};