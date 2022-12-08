'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('marketcoin', 
    { 
      coin_id: {
        type: Sequelize.STRING,
      },
      symbol:Sequelize.STRING,
      name:Sequelize.STRING,
      image:Sequelize.STRING,
      current_price:Sequelize.DOUBLE,
      market_cap:Sequelize.DOUBLE,
      market_cap_rank:Sequelize.INTEGER,
      fully_diluted_valuation:Sequelize.DOUBLE,
      total_volume:Sequelize.DOUBLE,
      high_24h:Sequelize.DOUBLE,
      low_24h:Sequelize.DOUBLE,
      price_change_24h:Sequelize.DOUBLE,
      price_change_percentage_24h:Sequelize.DOUBLE,
      market_cap_change_24h:Sequelize.DOUBLE,
      market_cap_change_percentage_24h:Sequelize.DOUBLE,
      circulating_supply:Sequelize.DOUBLE,
      total_supply:Sequelize.DOUBLE,
      max_supply:Sequelize.DOUBLE,
      ath:Sequelize.DOUBLE,
      ath_change_percentage:Sequelize.DOUBLE,
      ath_date:Sequelize.DATE,
      atl:Sequelize.DOUBLE,
      atl_change_percentage:Sequelize.DOUBLE,
      atl_date:Sequelize.DATE,
      roi:{
        type:Sequelize.JSON,
        allowNull: true,
      },
      last_updated:Sequelize.DATE,
      sparkline_in_7d:Sequelize.JSON,
      price_change_percentage_1h_in_currency:Sequelize.DOUBLE,
      price_change_percentage_1y_in_currency:Sequelize.DOUBLE,
      price_change_percentage_24h_in_currency:Sequelize.DOUBLE,
      price_change_percentage_30d_in_currency:Sequelize.DOUBLE,
      price_change_percentage_7d_in_currency:Sequelize.DOUBLE,
     });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('marketcoin');
  }
};
