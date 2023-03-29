'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class CPIAUCSL extends Model {
    }
    CPIAUCSL.init({
        closetime: DataTypes.DATE,
        closeprice: DataTypes.DOUBLE,
    }, {
        sequelize,
        modelName: 'CPIAUCSL',
        timestamps: false,
        tableName: 'CPIAUCSL',
    }
    );
    return CPIAUCSL;
};