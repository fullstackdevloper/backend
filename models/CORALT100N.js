
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CORALT100N extends Model {}
  
  CORALT100N.init({
    closetime: DataTypes.DATE,
    closeprice: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'CORALT100N',
    timestamps: false,
    tableName: 'CORALT100N',
  });
  
  return CORALT100N;
};