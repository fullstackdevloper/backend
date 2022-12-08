'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class riskdfavax extends Model {
    static associate(models) {
    
    }
  }
  riskdfavax.init({
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
    tableName: 'riskdfavax',
    modelName: 'riskdfavax',
  });
  return riskdfavax;
};