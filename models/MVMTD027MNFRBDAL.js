
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class MVMTD027MNFRBDAL extends Model {}
  
  MVMTD027MNFRBDAL.init({
    closetime: DataTypes.DATE,
    closeprice: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'MVMTD027MNFRBDAL',
    timestamps: false,
    tableName: 'MVMTD027MNFRBDAL',

});
return MVMTD027MNFRBDAL;
};