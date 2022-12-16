'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('chart',
      {
        id: {
          primaryKey: true,
          type: Sequelize.INTEGER, allowNull: false,
          autoIncrement: true
        },
        name: Sequelize.STRING,
        coin: Sequelize.STRING,
        metric: Sequelize.STRING,
        current_title:Sequelize.STRING,
        configuration: Sequelize.JSON,
      }
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
