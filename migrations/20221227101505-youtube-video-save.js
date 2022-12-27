'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('youtubevideos', 
    { 
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true
      },
      video_id: {
        type: Sequelize.STRING,
      },
      kind:Sequelize.STRING,
      etag:Sequelize.STRING,
      publishedAt:Sequelize.DATE,
      channelId:Sequelize.STRING,
      thumbnails_url:Sequelize.STRING,
      thumbnails_width:Sequelize.INTEGER,
      thumbnails_height:Sequelize.INTEGER,
      channelTitle:Sequelize.STRING,
      liveBroadcastContent:Sequelize.STRING,
      publishTime:Sequelize.DATE,
    })
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
