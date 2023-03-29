'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class NCBDBIQ027S extends Model {}
  
  NCBDBIQ027S.init({
    closetime: DataTypes.DATE,
    closeprice: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'NCBDBIQ027S',
    timestamps: false,
    tableName: 'NCBDBIQ027S',
  });
  
  return NCBDBIQ027S;
};