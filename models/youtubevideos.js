'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class youtubevideos extends Model {
    static associate(models) {
    }
  }
  youtubevideos.init({
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
      },
      video_id: {
        type: DataTypes.STRING,
      },
      kind:DataTypes.STRING,
      etag:DataTypes.STRING,
      publishedAt:DataTypes.DATE,
      channelId:DataTypes.STRING,
      title:DataTypes.STRING,
      description:DataTypes.TEXT,
      thumbnails_url:DataTypes.STRING,
      thumbnails_width:DataTypes.INTEGER,
      thumbnails_height:DataTypes.INTEGER,
      channelTitle:DataTypes.STRING,
      liveBroadcastContent:DataTypes.STRING,
      publishTime:DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'youtubevideos',
    timestamps: false,
    tableName: 'youtubevideos',
  }
  );
  return youtubevideos;
};