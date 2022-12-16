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
    coin:DataTypes.STRING,
    metric:DataTypes.STRING,
    current_title:DataTypes.STRING,
    configuration: DataTypes.JSON,
  }, {
    sequelize,
    modelName: 'charts',
    timestamps: false,
    tableName: 'charts',
  }
  );
  return chart;
};