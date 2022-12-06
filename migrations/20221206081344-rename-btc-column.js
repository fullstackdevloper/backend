'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.renameColumn('riskdfbtc','row.names','id');

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('riskdfbtc','row.names','id');

    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
