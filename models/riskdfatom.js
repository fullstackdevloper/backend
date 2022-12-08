'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class riskdfatom extends Model {
    static associate(models) {
    
    }
  }
  riskdfatom.init({
    closetime:DataTypes.DATE,
    closeprice:DataTypes.STRING,
    udpil:DataTypes.DOUBLE,
    udpim:DataTypes.DOUBLE,
    udpis:DataTypes.DOUBLE,
    mbi:DataTypes.DOUBLE,
    tci:DataTypes.DOUBLE,
    tcicv:DataTypes.DOUBLE,
    mdccv:DataTypes.DOUBLE,
    mdcdp:DataTypes.DOUBLE,
    volume:DataTypes.DOUBLE,
    mc:DataTypes.DOUBLE,
    cs:DataTypes.DOUBLE,
    // aa:DataTypes.STRING,
  },
   {
    sequelize,
    timestamps: false,
    tableName: 'riskdfatom',
    modelName: 'riskdfatom',
  });
  return riskdfatom;
};