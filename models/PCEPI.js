'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class PCEPI extends Model {
    }
    PCEPI.init({
        closetime: DataTypes.DATE,
        closeprice: DataTypes.DOUBLE,
    }, {
        sequelize,
        modelName: 'PCEPI',
        timestamps: false,
        tableName: 'PCEPI',
    }
    );
    return PCEPI;
}