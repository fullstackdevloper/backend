'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class FEDFUNDS extends Model {
    }
    FEDFUNDS.init({
        closetime: DataTypes.DATE,
        closeprice: DataTypes.DOUBLE
    }, {
        sequelize,
        modelName: 'FEDFUNDS',
        timestamps: false,
        tableName: 'FEDFUNDS',
    }
    );
    return FEDFUNDS;
}
