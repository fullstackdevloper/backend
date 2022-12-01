'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Chart.init({
    userID: DataTypes.STRING,
    name: DataTypes.STRING,
    configData: DataTypes.JSONB
  }, {
    sequelize,
    modelName: 'Chart',
  });
  return Chart;
};