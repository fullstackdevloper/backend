'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class GDP extends Model {}
  
  GDP.init({
    closetime: DataTypes.DATE,
    closeprice: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'GDP',
    timestamps: false,
    tableName: 'GDP',
  });
  
  return GDP;
};