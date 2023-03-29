'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class CORESTICKM159SFRBATL extends Model {
    }
    CORESTICKM159SFRBATL.init({
        closetime: DataTypes.DATE,
        closeprice: DataTypes.DOUBLE,
    }, {
        sequelize,
        modelName: 'CORESTICKM159SFRBATL',
        timestamps: false,
        tableName: 'CORESTICKM159SFRBATL',
    }
    );
    return CORESTICKM159SFRBATL;
}