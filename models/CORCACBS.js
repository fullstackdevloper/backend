'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CORCACBS extends Model {}
  
  CORCACBS.init({
    closetime: DataTypes.DATE,
    closeprice: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'CORCACBS',
    timestamps: false,
    tableName: 'CORCACBS',
  });
  
  return CORCACBS;
};
