'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class CPALTT01USM657N extends Model {
    }
    CPALTT01USM657N.init({
        closetime: DataTypes.DATE,
        closeprice: DataTypes.DOUBLE,
    }, {
        sequelize,
        modelName: 'CPALTT01USM657N',
        timestamps: false,
        tableName: 'CPALTT01USM657N',
    }
    );
    return CPALTT01USM657N;
}