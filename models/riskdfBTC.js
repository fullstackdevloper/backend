'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class riskdfBTC extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  riskdfBTC.init({
    CloseTime:DataTypes.STRING,
    price:DataTypes.STRING,
    udpiL:DataTypes.STRING,
    udpiM:DataTypes.STRING,
    udpiS:DataTypes.STRING,
    mbi:DataTypes.STRING,
    tci:DataTypes.STRING,
    tciCV:DataTypes.STRING,
    mdcCV:DataTypes.STRING,
    mdc:DataTypes.STRING,
    volume:DataTypes.STRING,
    mc:DataTypes.STRING,
    cs:DataTypes.STRING,
    // aa:DataTypes.STRING,
  },
   {
    sequelize,
    timestamps: false,
    tableName: 'riskdfBTC',
    modelName: 'riskdfBTC',
  });
  return riskdfBTC;
};