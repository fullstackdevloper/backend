'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cpitest extends Model {
  }
  cpitest.init({
    closetime: DataTypes.DATE,
    closeprice: DataTypes.DOUBLE,
    smadiff:DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'cpitest',
    timestamps: false,
    tableName: 'cpitest',
  }
  );
  return cpitest;
};
