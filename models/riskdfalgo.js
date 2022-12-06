'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class riskdfalgo extends Model {
    static associate(models) {
    
    }
  }
  riskdfalgo.init({
    closetime:DataTypes.STRING,
    closeprice:DataTypes.STRING,
    udpil:DataTypes.TEXT,
    udpim:DataTypes.TEXT,
    udpis:DataTypes.TEXT,
    mbi:DataTypes.TEXT,
    tci:DataTypes.TEXT,
    tcicv:DataTypes.TEXT,
    mdccv:DataTypes.TEXT,
    mdcdp:DataTypes.TEXT,
    volume:DataTypes.TEXT,
    mc:DataTypes.TEXT,
    cs:DataTypes.TEXT,
    // aa:DataTypes.STRING,
  },
   {
    sequelize,
    timestamps: false,
    tableName: 'riskdfalgo',
    modelName: 'riskdfalgo',
  });
  return riskdfalgo;
};