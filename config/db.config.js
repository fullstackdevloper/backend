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
  db.youtubeVideos = require("../models/youtubevideos")(sequelize, DataTypes, Model);
  db.chart = require("../models/charts")(sequelize, DataTypes, Model);
  db.testmetric = require("../models/testmetric")(sequelize, DataTypes, Model);
  db.m2test = require("../models/m2test")(sequelize, DataTypes, Model);
  db.cpitest = require("../models/cpitest")(sequelize, DataTypes, Model);
  
  db.CPIAUCSL = require("../models/CPIAUCSL")(sequelize, DataTypes, Model);
  db.CORESTICKM159SFRBATL = require("../models/CORESTICKM159SFRBATL")(sequelize, DataTypes, Model);
  db.CPALTT01USM657N = require("../models/CPALTT01USM657N")(sequelize, DataTypes, Model);
  db.PCEPI = require("../models/PCEPI")(sequelize, DataTypes, Model);
  db.PCECTPI = require("../models/PCECTPI")(sequelize, DataTypes, Model);
  db.M2SL = require("../models/M2SL")(sequelize, DataTypes, Model);
  db.M1SL = require("../models/M1SL")(sequelize, DataTypes, Model);
  db.FEDFUNDS = require("../models/FEDFUNDS")(sequelize, DataTypes, Model);
  db.WGS3MO = require("../models/WGS3MO")(sequelize, DataTypes, Model);
  db.WGS6MO = require("../models/WGS6MO")(sequelize, DataTypes, Model);
  db.WGS1YR = require("../models/WGS1YR")(sequelize, DataTypes, Model);
  db.WGS2YR = require("../models/WGS2YR")(sequelize, DataTypes, Model);
  db.WGS5YR = require("../models/WGS5YR")(sequelize, DataTypes, Model);
  db.WGS10YR = require("../models/WGS10YR")(sequelize, DataTypes, Model);
  db.CORCCACBS = require("../models/CORCCACBS")(sequelize, DataTypes, Model);
  db.CORCCT100S = require("../models/CORCCT100S")(sequelize, DataTypes, Model);
  db.CORCCOBS = require("../models/CORCCOBS")(sequelize, DataTypes, Model);
  db.CORCACBS = require("../models/CORCACBS")(sequelize, DataTypes, Model);
  db.CORBLACBS = require("../models/CORBLACBS")(sequelize, DataTypes, Model);
  db.CORALT100N = require("../models/CORALT100N")(sequelize, DataTypes, Model);
  db.CORBLOBS = require("../models/CORBLOBS")(sequelize, DataTypes, Model);
  db.WALCL = require("../models/WALCL")(sequelize, DataTypes, Model);
  db.GDP = require("../models/GDP")(sequelize, DataTypes, Model);
  db.GFDEBTN = require("../models/GFDEBTN")(sequelize, DataTypes, Model);
  db.FYFSD = require("../models/FYFSD")(sequelize, DataTypes, Model);
  db.FYFSGDA188S = require("../models/FYFSGDA188S")(sequelize, DataTypes, Model);
  db.GFDGDPA188S = require("../models/GFDGDPA188S")(sequelize, DataTypes, Model);
  db.FDHBFIN = require("../models/FDHBFIN")(sequelize, DataTypes, Model);
  db.MVMTD027MNFRBDAL = require("../models/MVMTD027MNFRBDAL")(sequelize, DataTypes, Model);
  db.FYGFDPUN = require("../models/FYGFDPUN")(sequelize, DataTypes, Model);
  db.GFDEGDQ188S = require("../models/GFDEGDQ188S")(sequelize, DataTypes, Model);
  db.NCBDBIQ027S = require("../models/NCBDBIQ027S")(sequelize, DataTypes, Model);
  db.TNWBSHNO = require("../models/TNWBSHNO")(sequelize, DataTypes, Model);
  db.TCMDO = require("../models/TCMDO")(sequelize, DataTypes, Model);
  db.BOGZ1FL155035065A = require("../models/BOGZ1FL155035065A")(sequelize, DataTypes, Model);
  db.BOGZ1FL075035503Q = require("../models/BOGZ1FL075035503Q")(sequelize, DataTypes, Model);
  db.CONSUMER = require("../models/CONSUMER")(sequelize, DataTypes, Model);
  db.BOGZ1FL153064486Q = require("../models/BOGZ1FL153064486Q")(sequelize, DataTypes, Model);
  db.SP500 = require("../models/SP500")(sequelize, DataTypes, Model);
  db.DJIA = require("../models/DJIA")(sequelize, DataTypes, Model);
  db.NASDAQCOM = require("../models/NASDAQCOM")(sequelize, DataTypes, Model);
  db.NASDAQ100 = require("../models/NASDAQ100")(sequelize, DataTypes, Model);
  db.RVXCLS = require("../models/RVXCLS")(sequelize, DataTypes, Model);
  db.VIXCLS = require("../models/VIXCLS")(sequelize, DataTypes, Model);
  db.WILL5000INDFC = require("../models/WILL5000INDFC")(sequelize, DataTypes, Model);
  db.WILL5000PRFC = require("../models/WILL5000PRFC")(sequelize, DataTypes, Model);
  db.WILL5000VOLFC = require("../models/WILL5000VOLFC")(sequelize, DataTypes, Model);
  
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
