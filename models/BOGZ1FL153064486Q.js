
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BOGZ1FL153064486Q extends Model {}
  
  BOGZ1FL153064486Q.init({
    closetime: DataTypes.DATE,
    closeprice: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'BOGZ1FL153064486Q',
    timestamps: false,
    tableName: 'BOGZ1FL153064486Q',
  });
  
  return BOGZ1FL153064486Q;
};