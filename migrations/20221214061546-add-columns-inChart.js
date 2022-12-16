'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('chart','coin',{
      type: Sequelize.STRING});
      await queryInterface.addColumn('chart','metric',{
        type: Sequelize.STRING});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('chart','coin',{
      type: Sequelize.STRING});
      await queryInterface.removeColumn('chart','metric',{
        type: Sequelize.STRING});
  }
};
