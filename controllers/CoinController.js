const { body, validationResult } = require("express-validator");
const apiResponse = require("../helpers/apiResponse");
const { connect } = require("../config/db.config");
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const { Op } = require('sequelize');
/**
 * add chart api.
 *
 * @param {json}      data
 *
 * @returns {Object}
 */
exports.addChart = [
  body("data")
    .isLength({ min: 1 })
    .trim()
    .withMessage("Data must be specified."),
  (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return apiResponse.validationErrorWithData(
          res,
          "Validation Error.",
          errors.array()
        );
      } else {
        db = connect();
      }
    } catch (err) {
      return apiResponse.ErrorResponse(
        res,
        err.message || "INTERNAL SERVER ERROR"
      );
    }
  },
];

exports.getCoins = [
  body("data")
    .isLength({ min: 1 })
    .trim()
    .withMessage("Data must be specified."),
  (req, res) => {
    db = connect();
    try {
      let query = ['closetime',
        'closeprice',
        'udpil',
        'udpil',
        'udpis',
        'mbi',
        'tci',
        'tcicv',
        'mdccv',
        'mdcdp',
        'volume',
        'mc',
        'cs',]
      let { coin, metric, limit,dateFrom,dateTo} = req.query
      let metrics = ["closetime",
      "closeprice",
      "udpil",
      "udpis",
      "mbi",
      "tci",
      "tcicv",
      "mdccv",
      "mdcdp",
      "volume",
      "mc",
      "cs"]
      let coins = ['btc', 'ada', 'algo', 'atom', 'avax', 'bnb', 'dot', 'egld', 'enj', 'eth', 'ftm', 'hbar', 'hnt', 'ksm', 'link', 'ltc', 'matic', 'near', 'one', 'qnt', 'sand', 'sol', 'theta', 'vet', 'xrp', 'xtz', 'zil']
      if (!coin) {
        return apiResponse.notFoundResponse(
          res,
          "Coin is required!",
        );
      }

      if (!coins.includes(coin)) {
        return apiResponse.notFoundResponse(
          res,
          "Possible value of coin is one of ('btc','ada','algo','atom','avax','bnb','dot','egld','enj','eth','ftm','hbar','hnt','ksm','link','ltc','matic','near','one','qnt','sand','sol','theta','vet','xrp','xtz','zil')!",
        );
      }

      if(metric && (!metrics.includes(metric))){
        return apiResponse.notFoundResponse(
          res,
          "Possible value of metric is one of ('closeprice','udpil','udpis','mbi','tci','tcicv','mdccv','mdcdp','volume','mc','cs)!",
        );
      }
      if (metric !== undefined) {
        query = [metric]
      }
      limit = limit ? limit : 250
      if(dateFrom){
        dateFrom = new Date(dateFrom).getFullYear()+"-"+`${new Date(dateFrom).getMonth() + 1}` +"-"+new Date(dateFrom).getDate()
      }
     if(dateTo){
      dateTo = new Date(dateTo).getFullYear()+"-"+`${new Date(dateTo).getMonth() + 1}`+"-"+new Date(dateTo).getDate()
     }
     let dateQuery;
     if(dateFrom && dateTo){
      dateQuery ={closetime: 
        {[Op.between] : [dateFrom , dateTo ]}
    }
     }
      // console.log("dattttt:",dateFrom,dateTo)
      db[coin].findAll({ attributes: query, limit,where:dateQuery
      }).then((data) => {
        return apiResponse.successResponseWithData(
          res,
          "Data loaded successfully",
          data
        );
      })
    } catch (err) {
      console.log("errrrrrrrRR:", err)
      return apiResponse.ErrorResponse(
        res,
        err.message || "INTERNAL SERVER ERROR"
      );
    }
  },
];

exports.getAllCoins = [
  body("data")
    .isLength({ min: 1 })
    .trim()
    .withMessage("Data must be specified."),
  (req, res) => {
    db = connect();
    try {
      let {limit} = req.query;
      limit = limit ? limit : 1
      db.riskdf.findAll({attributes: {exclude: ['id']},limit,order:[['closetime','DESC']]}).then((data) => {
        return apiResponse.successResponseWithData(
          res,
          "Data loaded successfully",
          data
        );
      })
    } catch (err) {
      return apiResponse.ErrorResponse(
        res,
        err.message || "INTERNAL SERVER ERROR"
      );
    }
  },
];

exports.getMarketCoins = [
  body("data")
    .isLength({ min: 1 })
    .trim()
    .withMessage("Data must be specified."),
  (req, res) => {
    db = connect();
    try {
      // let {limit} = req.query;
      // limit = limit ? limit : 250
      db.riskdf.findAll({attributes: {exclude: ['id']}}).then((data) => {
        return apiResponse.successResponseWithData(
          res,
          "Data loaded successfully",
          data
        );
      })
    } catch (err) {
      console.log("errrrrrrrRR:", err)
      return apiResponse.ErrorResponse(
        res,
        err.message || "INTERNAL SERVER ERROR"
      );
    }
  },
];

exports.saveMarketCoins = [
  body("data")
    .isLength({ min: 1 })
    .trim()
    .withMessage("Data must be specified."),
  async (req, res) => {
    db = connect();
    try {
      const response =  await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd", { method: 'get', headers: { 'Content-Type': 'application/json' } }
			);
			const data = await response.json();

      /**save data into marketcoin table code start*/
      saveMarketCoinDataIntoTable(data);
      /**save data into marketcoin table code end*/

      console.log("dattttttt:",data)
    } catch (err) {
      console.log("errrrrrrrRR:", err)
      return apiResponse.ErrorResponse(
        res,
        err.message || "INTERNAL SERVER ERROR"
      );
    }
  },
];


const saveMarketCoinDataIntoTable =(data)=>{
  let newData ={
    id:data.coin_id,
  }
}