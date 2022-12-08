const { body, validationResult } = require("express-validator");
const apiResponse = require("../helpers/apiResponse");
const { connect } = require("../config/db.config");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const { Op } = require("sequelize");
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
      let query = [
        "closetime",
        "closeprice",
        "udpil",
        "udpil",
        "udpis",
        "mbi",
        "tci",
        "tcicv",
        "mdccv",
        "mdcdp",
        "volume",
        "mc",
        "cs",
      ];
      let { coin, metric, limit, dateFrom, dateTo } = req.query;
      let metrics = [
        "closetime",
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
        "cs",
      ];
      let coins = [
        "btc",
        "ada",
        "algo",
        "atom",
        "avax",
        "bnb",
        "dot",
        "egld",
        "enj",
        "eth",
        "ftm",
        "hbar",
        "hnt",
        "ksm",
        "link",
        "ltc",
        "matic",
        "near",
        "one",
        "qnt",
        "sand",
        "sol",
        "theta",
        "vet",
        "xrp",
        "xtz",
        "zil",
      ];
      if (!coin) {
        return apiResponse.notFoundResponse(res, "Coin is required!");
      }

      if (!coins.includes(coin)) {
        return apiResponse.notFoundResponse(
          res,
          "Possible value of coin is one of ('btc','ada','algo','atom','avax','bnb','dot','egld','enj','eth','ftm','hbar','hnt','ksm','link','ltc','matic','near','one','qnt','sand','sol','theta','vet','xrp','xtz','zil')!"
        );
      }

      if (metric && !metrics.includes(metric)) {
        return apiResponse.notFoundResponse(
          res,
          "Possible value of metric is one of ('closeprice','udpil','udpis','mbi','tci','tcicv','mdccv','mdcdp','volume','mc','cs)!"
        );
      }
      if (metric !== undefined) {
        query = [metric];
      }
      limit = limit ? limit : 250;
      if (dateFrom) {
        dateFrom =
          new Date(dateFrom).getFullYear() +
          "-" +
          `${new Date(dateFrom).getMonth() + 1}` +
          "-" +
          new Date(dateFrom).getDate();
      }
      if (dateTo) {
        dateTo =
          new Date(dateTo).getFullYear() +
          "-" +
          `${new Date(dateTo).getMonth() + 1}` +
          "-" +
          new Date(dateTo).getDate();
      }
      let dateQuery;
      if (dateFrom && dateTo) {
        dateQuery = { closetime: { [Op.between]: [dateFrom, dateTo] } };
      }
      // console.log("dattttt:",dateFrom,dateTo)
      db[coin]
        .findAll({ attributes: query, limit, where: dateQuery })
        .then((data) => {
          return apiResponse.successResponseWithData(
            res,
            "Data loaded successfully",
            data
          );
        });
    } catch (err) {
      console.log("errrrrrrrRR:", err);
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
      let { limit } = req.query;
      limit = limit ? limit : 1;
      db.riskdf
        .findAll({
          attributes: { exclude: ["id"] },
          limit,
          order: [["closetime", "DESC"]],
        })
        .then((data) => {
          return apiResponse.successResponseWithData(
            res,
            "Data loaded successfully",
            data
          );
        });
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
      let {limit,page} = req.query;
      limit = limit ? limit : 50;
      page = page?page:1
      let offset= (Number(page)-1) * limit;
      db.marketcoin.findAll({offset, limit,order:[['id','ASC']] }).then((data) => {
        return apiResponse.successResponseWithData(
          res,
          "Data loaded successfully",
          data
        );
      });
    } catch (err) {
      console.log("errrrrrrrRR:", err);
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
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=250",
        { method: "get", headers: { "Content-Type": "application/json" } }
      );
      const data = await response.json();

      /**save data into marketcoin table code start*/
      saveMarketCoinDataIntoTable(data, db);

      return apiResponse.successResponse(
        res,
        "Coin data fetch successfully from coingeko api!",
      );
      /**save data into marketcoin table code end*/
    } catch (err) {
      console.log("errrrrrrrRR:", err);
      return apiResponse.ErrorResponse(
        res,
        err.message || "INTERNAL SERVER ERROR"
      );
    }
  },
];

const saveMarketCoinDataIntoTable = async (data, db) => {
  let dbData = await db.marketcoin.findAll({ attributes: { exclude: "id" } });

  let allRiskCoinArr = [
    "btc",
    "ada",
    "algo",
    "atom",
    "avax",
    "bnb",
    "dot",
    "egld",
    "enj",
    "eth",
    "ftm",
    "hbar",
    "hnt",
    "ksm",
    "link",
    "ltc",
    "matic",
    "near",
    "one",
    "qnt",
    "sand",
    "sol",
    "theta",
    "vet",
    "xrp",
    "xtz",
    "zil",
  ];
  let newJsonData = [];
  data.map(async(res) => {
    /**check risk coin exist in db or not code start*/
    let newObj = {
      coin_id: res.id,
      symbol: res.symbol,
      name: res.name,
      image: res.image,
      current_price: res.current_price,
      market_cap: res.market_cap,
      market_cap_rank: res.market_cap_rank,
      fully_diluted_valuation: res.fully_diluted_valuation,
      total_volume: res.total_volume,
      high_24h: res.high_24h,
      low_24h: res.low_24h,
      price_change_24h: res.price_change_24h,
      price_change_percentage_24h: res.price_change_percentage_24h,
      market_cap_change_24h: res.market_cap_change_24h,
      market_cap_change_percentage_24h: res.market_cap_change_percentage_24h,
      circulating_supply: res.circulating_supply,
      total_supply: res.total_supply,
      max_supply: res.max_supply,
      ath: res.ath,
      ath_change_percentage: res.ath_change_percentage,
      ath_date: res.ath_date,
      atl: res.atl,
      atl_change_percentage: res.atl_change_percentage,
      atl_date: res.atl_date,
      roi: res.roi,
      last_updated: res.last_updated,
    };
    newJsonData.push(newObj)
  })
    /**check risk coin exist in db or not code start*/
    if (newJsonData.length > 0) {
      /**delete coins from db comparing with coingeko api data coin */
      deleteCoins(newJsonData, dbData, db);
  
      /**update coins from db comparing with coingeko api data coin*/
      updateCoins(newJsonData, dbData, db);
  
      /**save new entries into db table */
      let result = newJsonData.filter(
        (o1) => !dbData.some((o2) => o1.symbol === o2.symbol)
      );
  
      console.log("resultresult:", result);
      // return
      db.marketcoin.bulkCreate(result)
      let newObj1={}
      await db.marketcoin.findAll({ attributes: { exclude: "id" } }).then((allCoins)=>{
        allCoins.map((res)=>{
          if (allRiskCoinArr.includes(res.symbol)){
            db[res.symbol].findAll({
              attributes: { exclude: "id" },
              limit: 1,
              order: [["closetime", "DESC"]],
            }).then(async(coin) => {
                newObj1.closetime = coin[0].closetime
                newObj1.closeprice = coin[0].closeprice
                newObj1.udpil = coin[0].udpil
                newObj1.udpim = coin[0].udpim
                newObj1.udpis = coin[0].udpis
                newObj1.mbi = coin[0].mbi
                newObj1.tci = coin[0].tci
                newObj1.tcicv = coin[0].tcicv
                newObj1.mdccv = coin[0].mdccv
                newObj1.mdcdp = coin[0].mdcdp
                newObj1.volume = coin[0].volume
                newObj1.mc = coin[0].mc
                newObj1.cs = coin[0].cs
                await db.marketcoin.update(newObj1,{where:{symbol:res.symbol}})
                console.log("update successfully risk metrics")
              });
          }
        })
       
      });
      console.log("create successfully");
    }
};

/**delete coin function start */
const deleteCoins = async (newJsonData, dbData, db) => {
  let result1 = await dbData.filter(
    (o1) => !newJsonData.some((o2) => o1.symbol === o2.symbol)
  );
  let coinId = [];
  for (let ele of result1) {
    coinId.push(ele.id);
  }
  await db.marketcoin.destroy({ where: { coin_id: coinId } });
  console.log("deleted successfully");
};

/**update coin function start */
const updateCoins = async (newJsonData, dbData, db) => {
  let newJson = await newJsonData.filter((o1) =>
    dbData.some((o2) => o1.symbol === o2.symbol)
  );
  for (let ele of newJson) {
    await db.marketcoin.update(ele, { where: { symbol: ele.symbol } });
  }
  console.log("update successfully");
};


const riskData = async (allRiskCoinArr,db,newObj,res)=>{
  if (allRiskCoinArr.includes(res.symbol)){
    db[res.symbol].findAll({
      attributes: { exclude: "id" },
      limit: 1,
      order: [["closetime", "DESC"]],
    }).then((coin) => {
        newObj.closetime = coin[0].closetime
        newObj.closeprice = coin[0].closeprice
        newObj.udpil = coin[0].udpil
        newObj.udpim = coin[0].udpim
        newObj.udpis = coin[0].udpis
        newObj.mbi = coin[0].mbi
        newObj.tci = coin[0].tci
        newObj.tcicv = coin[0].tcicv
        newObj.mdccv = coin[0].mdccv
        newObj.mdcdp = coin[0].mdcdp
        newObj.volume = coin[0].volume
        newObj.mc = coin[0].mc
        newObj.cs = coin[0].cs
        return newObj;
      });
  }
  else{
    return 0;
  }
}