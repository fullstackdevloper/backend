const { Sequelize, Model, DataTypes } = require("sequelize");
const logger = require("../logger/api.logger");

const connect = () => {
  const hostName = process.env.DB_HOST;
  const userName = process.env.DB_USERNAME;
  const password = process.env.DB_PASSWORD;
  const database = process.env.DB_NAME;
  const dialect = process.env.DB_DIALECT;

  console.log("ggggggggggggg:",hostName,userName,password,dialect)
  const sequelize = new Sequelize(database, userName, password, {
    host: hostName,
    dialect: dialect,
    operatorsAliases: false,
    pool: {
      max: 10,
      min: 0,
      acquire: 20000,
      idle: 5000,
    },
  });

  const db = {};
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
  console.log("dbbbbbbb:",db)
  db.chart = require("../models/chart")(sequelize, DataTypes, Model);
  db.riskBTC = require("../models/riskdfBTC")(sequelize, DataTypes, Model);
  return db;
};

module.exports = {
  connect,
};
