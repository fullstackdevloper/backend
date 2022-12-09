'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('chart', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER, allowNull: false,
        autoIncrement: true
      },
      userId: Sequelize.INTEGER,
      configuration: Sequelize.JSON
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('chart');
  }
};
