'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class PCECTPI extends Model {
    }
    PCECTPI.init({
        closetime: DataTypes.DATE,
        closeprice: DataTypes.DOUBLE,
        smadiff:DataTypes.DOUBLE,
    }, {
        sequelize,
        modelName: 'PCECTPI',
        timestamps: false,
        tableName: 'PCECTPI',
    }
    );
    return PCECTPI;
}