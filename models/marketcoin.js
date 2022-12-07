'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class marketcoin extends Model {
    static associate(models) {
    }
  }
  marketcoin.init({
    id: {
        type: DataTypes.STRING,
        autoIncrement: false,
        primaryKey: false
      },
    symbol:DataTypes.STRING,
    name:DataTypes.STRING,
    image:DataTypes.STRING,
    current_price:DataTypes.DOUBLE,
    market_cap:DataTypes.BIGINT,
    market_cap_rank:DataTypes.INTEGER,
    fully_diluted_valuation:DataTypes.BIGINT,
    total_volume:DataTypes.BIGINT,
    high_24h:DataTypes.DOUBLE,
    low_24h:DataTypes.DOUBLE,
    price_change_24h:DataTypes.DOUBLE,
    price_change_percentage_24h:DataTypes.DOUBLE,
    market_cap_change_24h:DataTypes.BIGINT,
    market_cap_change_percentage_24h:DataTypes.DOUBLE,
    circulating_supply:DataTypes.BIGINT,
    total_supply:DataTypes.BIGINT,
    max_supply:DataTypes.BIGINT,
    ath:DataTypes.BIGINT,
    ath_change_percentage:DataTypes.DOUBLE,
    ath_date:DataTypes.DATE,
    atl:DataTypes.DOUBLE,
    atl_change_percentage:DataTypes.DOUBLE,
    atl_date:DataTypes.DATE,
    roi:{
        type:DataTypes.TEXT,
        allowNull: true,
      },
    last_updated:DataTypes.DATE,
    sparkline_in_7d:DataTypes.JSON,
    price_change_percentage_1h_in_currency:DataTypes.DOUBLE,
    price_change_percentage_1y_in_currency:DataTypes.DOUBLE,
    price_change_percentage_24h_in_currency:DataTypes.DOUBLE,
    price_change_percentage_30d_in_currency:DataTypes.DOUBLE,
    price_change_percentage_7d_in_currency:DataTypes.DOUBLE,
    // aa:DataTypes.STRING,
  },
   {
    sequelize,
    timestamps: false,
    tableName: 'marketcoin',
    modelName: 'marketcoin',
  });
  return marketcoin;
};