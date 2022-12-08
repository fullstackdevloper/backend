const { Sequelize, Model, DataTypes } = require("sequelize");
const logger = require("../logger/api.logger");

const connect = () => {
  const hostName = process.env.DB_HOST;
  const userName = process.env.DB_USERNAME;
  const password = process.env.DB_PASSWORD;
  const database = process.env.DB_NAME;
  const dialect = process.env.DB_DIALECT;

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
  db.riskdf = require("../models/riskdf")(sequelize, DataTypes, Model);
  db.marketcoin = require("../models/marketcoin")(sequelize, DataTypes, Model);
  db.btc = require("../models/riskdfbtc")(sequelize, DataTypes, Model);
  db.ada = require("../models/riskdfada")(sequelize, DataTypes, Model);
  db.algo = require("../models/riskdfalgo")(sequelize, DataTypes, Model);
  db.atom = require("../models/riskdfatom")(sequelize, DataTypes, Model);
  db.avax = require("../models/riskdfavax")(sequelize, DataTypes, Model);
  db.bnb = require("../models/riskdfbnb")(sequelize, DataTypes, Model);
  db.dot = require("../models/riskdfdot")(sequelize, DataTypes, Model);
  db.egld = require("../models/riskdfegld")(sequelize, DataTypes, Model);
  db.enj = require("../models/riskdfenj")(sequelize, DataTypes, Model);
  db.eth = require("../models/riskdfeth")(sequelize, DataTypes, Model);
  db.ftm = require("../models/riskdfftm")(sequelize, DataTypes, Model);
  db.hbar = require("../models/riskdfhbar")(sequelize, DataTypes, Model);
  db.hnt = require("../models/riskdfhnt")(sequelize, DataTypes, Model);
  db.ksm = require("../models/riskdfksm")(sequelize, DataTypes, Model);
  db.link = require("../models/riskdflink")(sequelize, DataTypes, Model);
  db.ltc = require("../models/riskdfltc")(sequelize, DataTypes, Model);
  db.matic = require("../models/riskdfmatic")(sequelize, DataTypes, Model);
  db.near = require("../models/riskdfnear")(sequelize, DataTypes, Model);
  db.one = require("../models/riskdfone")(sequelize, DataTypes, Model);
  db.qnt = require("../models/riskdfqnt")(sequelize, DataTypes, Model);
  db.sand = require("../models/riskdfsand")(sequelize, DataTypes, Model);
  db.sol = require("../models/riskdfsol")(sequelize, DataTypes, Model);
  db.theta = require("../models/riskdftheta")(sequelize, DataTypes, Model);
  db.vet = require("../models/riskdfvet")(sequelize, DataTypes, Model);
  db.xrp = require("../models/riskdfxrp")(sequelize, DataTypes, Model);
  db.xtz = require("../models/riskdfxtz")(sequelize, DataTypes, Model);
  db.zil = require("../models/riskdfzil")(sequelize, DataTypes, Model);

  return db;
};

module.exports = {
  connect,
};
