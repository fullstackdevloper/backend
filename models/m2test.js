'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class m2test extends Model {
  }
  m2test.init({
    closetime: DataTypes.DATE,
    closeprice: DataTypes.DOUBLE,
    smadiff:DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'm2test',
    timestamps: false,
    tableName: 'm2test',
  }
  );
  return m2test;
};
