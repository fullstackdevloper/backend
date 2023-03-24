'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class testmetric extends Model {
  }
  testmetric.init({
    closetime: DataTypes.INTEGER,
    closeprice: DataTypes.DOUBLE,
    smadiff:DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'testmetric',
    timestamps: false,
    tableName: 'testmetric',
  }
  );
  return testmetric;
};
