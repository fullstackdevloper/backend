'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BOGZ1FL155035065A extends Model {}
  
  BOGZ1FL155035065A.init({
    closetime: DataTypes.DATE,
    closeprice: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'BOGZ1FL155035065A',
    timestamps: false,
    tableName: 'BOGZ1FL155035065A',
  });
  
  return BOGZ1FL155035065A;
};