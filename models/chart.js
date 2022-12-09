'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class chart extends Model {
    static associate(models) {
    }
  }
  chart.init({
    userId: DataTypes.INTEGER,
    name:DataTypes.STRING,
    configuration: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'chart',
    timestamps: false,
    tableName: 'chart',
  }
  );
  return chart;
};