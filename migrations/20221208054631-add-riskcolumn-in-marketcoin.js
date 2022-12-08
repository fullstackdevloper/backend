'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('marketcoin','closetime',Sequelize.DATE);
    await queryInterface.addColumn('marketcoin','closeprice',Sequelize.STRING);
    await queryInterface.addColumn('marketcoin','udpil',Sequelize.DOUBLE);
    await queryInterface.addColumn('marketcoin','udpim',Sequelize.DOUBLE);
    await queryInterface.addColumn('marketcoin','udpis',Sequelize.DOUBLE);
    await queryInterface.addColumn('marketcoin','mbi',Sequelize.DOUBLE);
    await queryInterface.addColumn('marketcoin','tci',Sequelize.DOUBLE);
    await queryInterface.addColumn('marketcoin','tcicv',Sequelize.DOUBLE);
    await queryInterface.addColumn('marketcoin','mdccv',Sequelize.DOUBLE);
    await queryInterface.addColumn('marketcoin','mdcdp',Sequelize.DOUBLE);
    await queryInterface.addColumn('marketcoin','volume',Sequelize.DOUBLE);
    await queryInterface.addColumn('marketcoin','mc',Sequelize.DOUBLE);
    await queryInterface.addColumn('marketcoin','cs',Sequelize.DOUBLE);

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('marketcoin','closetime',Sequelize.DATE);
    await queryInterface.removeColumn('marketcoin','closeprice',Sequelize.STRING);
    await queryInterface.removeColumn('marketcoin','udpil',Sequelize.DOUBLE);
    await queryInterface.removeColumn('marketcoin','udpim',Sequelize.DOUBLE);
    await queryInterface.removeColumn('marketcoin','udpis',Sequelize.DOUBLE);
    await queryInterface.removeColumn('marketcoin','mbi',Sequelize.DOUBLE);
    await queryInterface.removeColumn('marketcoin','tci',Sequelize.DOUBLE);
    await queryInterface.removeColumn('marketcoin','tcicv',Sequelize.DOUBLE);
    await queryInterface.removeColumn('marketcoin','mdccv',Sequelize.DOUBLE);
    await queryInterface.removeColumn('marketcoin','mdcdp',Sequelize.DOUBLE);
    await queryInterface.removeColumn('marketcoin','volume',Sequelize.DOUBLE);
    await queryInterface.removeColumn('marketcoin','mc',Sequelize.DOUBLE);
    await queryInterface.removeColumn('marketcoin','cs',Sequelize.DOUBLE);
  }
};
