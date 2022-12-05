'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    //  await queryInterface.renameColumn('riskdfBTC', 'id', 'id')
     await queryInterface.renameColumn('riskdfBTC', 'BTC_UDPI_LT', 'udpiL')
     await queryInterface.renameColumn('riskdfBTC', 'BTC_UDPI_MT', 'udpiM')
     await queryInterface.renameColumn('riskdfBTC', 'BTC_UDPI_ST', 'udpiS')
     await queryInterface.renameColumn('riskdfBTC', 'BTC_MBI', 'mbi')
     await queryInterface.renameColumn('riskdfBTC', 'BTC_TCI', 'tci')
     await queryInterface.renameColumn('riskdfBTC', 'BTC_TCI_CV', 'tciCV')
     await queryInterface.renameColumn('riskdfBTC', 'BTC_MDC_CV', 'mdcCV')
     await queryInterface.renameColumn('riskdfBTC', 'BTC_MDC_DP', 'mdc')
     await queryInterface.renameColumn('riskdfBTC', 'BTC_Volume', 'volume')
     await queryInterface.renameColumn('riskdfBTC', 'BTC_MC', 'mc')
     await queryInterface.renameColumn('riskdfBTC', 'BTC_CS', 'cs')

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
