'use strict';
module.exports = (sequelize, DataTypes) => {
  class BOGZ1FL075035503Q extends Model {}
  
  BOGZ1FL075035503Q.init({
    closetime: DataTypes.DATE,
    closeprice: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'BOGZ1FL075035503Q',
    timestamps: false,
    tableName: 'BOGZ1FL075035503Q',
  });
  
  return BOGZ1FL075035503Q;
};