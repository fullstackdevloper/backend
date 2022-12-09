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
    coin_id: {
        type: DataTypes.STRING,
      },
    symbol:DataTypes.STRING,
    name:DataTypes.STRING,
    image:DataTypes.STRING,
    current_price:DataTypes.DOUBLE,
    market_cap:DataTypes.DOUBLE,
    market_cap_rank:DataTypes.INTEGER,
    fully_diluted_valuation:DataTypes.DOUBLE,
    total_volume:DataTypes.DOUBLE,
    high_24h:DataTypes.DOUBLE,
    low_24h:DataTypes.DOUBLE,
    price_change_24h:DataTypes.DOUBLE,
    price_change_percentage_24h:DataTypes.DOUBLE,
    market_cap_change_24h:DataTypes.DOUBLE,
    market_cap_change_percentage_24h:DataTypes.DOUBLE,
    circulating_supply:DataTypes.DOUBLE,
    total_supply:DataTypes.DOUBLE,
    max_supply:DataTypes.DOUBLE,
    ath:DataTypes.DOUBLE,
    ath_change_percentage:DataTypes.DOUBLE,
    ath_date:DataTypes.DATE,
    atl:DataTypes.DOUBLE,
    atl_change_percentage:DataTypes.DOUBLE,
    atl_date:DataTypes.DATE,
    roi:{
        type:DataTypes.JSON,
        allowNull: true,
      },
    last_updated:DataTypes.DATE,
    sparkline_in_7d:DataTypes.JSON,
    price_change_percentage_1h_in_currency:DataTypes.DOUBLE,
    price_change_percentage_1y_in_currency:DataTypes.DOUBLE,
    price_change_percentage_24h_in_currency:DataTypes.DOUBLE,
    price_change_percentage_30d_in_currency:DataTypes.DOUBLE,
    price_change_percentage_7d_in_currency:DataTypes.DOUBLE,
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
    risk_exist:{type:DataTypes.INTEGER,defaultValue:0},
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