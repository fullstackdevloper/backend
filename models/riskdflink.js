'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class riskdflink extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  riskdflink.init({
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
    tableName: 'riskdflink',
    modelName: 'riskdflink',
  });
  return riskdflink;
};