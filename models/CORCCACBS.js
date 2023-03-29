
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CORCCACBS extends Model {}
  
  CORCCACBS.init({
    closetime: DataTypes.DATE,
    closeprice: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'CORCCACBS',
    timestamps: false,
    tableName: 'CORCCACBS',
  });
  
  return CORCCACBS;
};