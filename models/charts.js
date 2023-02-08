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
    user_id: DataTypes.INTEGER,
    chart_id: DataTypes.STRING,
    name:DataTypes.STRING,
    metric_tab_data:DataTypes.JSON,
    configuration: DataTypes.JSON,
  }, {
    sequelize,
    modelName: 'charts',
    timestamps: false,
    tableName: 'chart',
  }
  );
  return chart;
};