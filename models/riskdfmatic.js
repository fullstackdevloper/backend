'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class riskdfmatic extends Model {
    static associate(models) {
    }
  }
  riskdfmatic.init({
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
  },
   {
    sequelize,
    timestamps: false,
    tableName: 'riskdfmatic',
    modelName: 'riskdfmatic',
  });
  return riskdfmatic;
};