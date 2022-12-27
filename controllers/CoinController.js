const { body, validationResult } = require("express-validator");
const apiResponse = require("../helpers/apiResponse");
const { connect } = require("../config/db.config");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const { Op, NUMBER } = require("sequelize");
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
        "udpim",
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
        "udpim",
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
          "Possible value of metric is one of ('closeprice','udpil','udpis','udpim','mbi','tci','tcicv','mdccv','mdcdp','volume','mc','cs)!"
        );
      }
      if (metric !== undefined) {
        query = ['closetime', metric];
      }
      // limit = limit ? limit : 250;
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
      if (limit) {
        db[coin]
          .findAll({ attributes: query, limit, where: dateQuery, order: [["closetime", "ASC"]] })
          .then((data) => {
            return apiResponse.successResponseWithData(
              res,
              "Data loaded successfully",
              data
            );
          });
      } else {
        db[coin]
          .findAll({ attributes: query, where: dateQuery, order: [["closetime", "ASC"]] })
          .then((data) => {
            return apiResponse.successResponseWithData(
              res,
              "Data loaded successfully",
              data
            );
          });
      }

    } catch (err) {
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
  async (req, res) => {
    db = connect();
    try {
      let query = {}
      let { limit, page, risk_exist, category } = req.query;
      limit = limit ? limit : 50;
      page = page ? page : 1
      risk_exist = risk_exist ? Number(risk_exist) : 0
      let offset = (Number(page) - 1) * limit;
      query = risk_exist === 1 ? { where: { risk_exist: 1 }, offset, limit, order: [['id', 'ASC']] } : { offset, limit, order: [['market_cap_rank', 'ASC']] }


      let data = await db.marketcoin.findAll(query)
      let categoryData;
      if (category) {
        const response = await fetch(
          `${process.env.COINGEKO_API_URL}?vs_currency=usd&category=${category}&order=market_cap_desc&per_page=${limit}&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d%2C30d%2C1y`,
          { method: "get", headers: { "Content-Type": "application/json" } }
        );
        categoryData = await response.json();
        console.log("categoryDatacategoryData:", categoryData)
        let coins = categoryData.map((coin, i) => {
          return coin.symbol
        })
        var result = data.filter(function (o1) {
          // filter out (!) items in result2

          return coins.some(function (o2) {
            return o1.symbol === o2;          // assumes unique id
          });

        })
        data = result
      }
      // await db.marketcoin.findAll(query).then((data) => {
      return apiResponse.successResponseWithData(
        res,
        "Data loaded successfully",
        { count: data.length, data }
      );
      // });
    } catch (err) {
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
        `${process.env.COINGEKO_API_URL}?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d%2C30d%2C1y`,
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
      return apiResponse.ErrorResponse(
        res,
        err.message || "INTERNAL SERVER ERROR"
      );
    }
  },
];

exports.getExcelData = [
  async (req, res) => {
    db = connect();
    try {
      const fs = require("fs");
      const csv = require("fast-csv")
      let data = []
      fs.createReadStream("./helpers/excelFile.csv")
        .pipe(csv.parse({ headers: true }))
        .on("data", row => {
          data.push(row)
          let closetime = ''
          if (row.closetime !== '') {
            closetime = new Date(row.closetime).getFullYear() +
              "-" +
              `${new Date(row.closetime).getMonth() + 1}` +
              "-" +
              `${new Date(row.closetime).getDate()}`;
          }
          let body = {
            volume: row.volume === '' ? 0 : row.volume,
            mc: row.mc === '' ? 0 : row.mc,
            cs: row.cs === '' ? 0 : row.cs
          }
          db.btc.update(body, { where: { closetime: { [Op.eq]: closetime } } }).then((dataUpdate) => {
          })
          data.push(row)
        })
      return apiResponse.successResponseWithData(
        res,
        "Coin data fetch successfully from coingeko api!",
        { data, count: data.length }
      );
      /**save data into marketcoin table code end*/
    } catch (err) {
      return apiResponse.ErrorResponse(
        res,
        err.message || "INTERNAL SERVER ERROR"
      );
    }
  },
];

exports.saveYoutubeVideos = [
  body("data")
    .isLength({ min: 1 })
    .trim()
    .withMessage("Data must be specified."),
  async (req, res) => {
    let { channelId } = req.query;
    db = connect();
    try {
      let key = 'AIzaSyBb0BH0GbCl-xoVVcdashHubCjyk2nh8Jw'
      // let channelId ='UC_bG7yHgT_xOUKvI2Hvo6Vg', UCzECtg05OBc2sE1KsRnHK7g
      let part = 'snippet,id'
      let order = 'date'
      let maxResults = 20
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${key}&channelId=${channelId}&part=${part}&order=${order}&maxResults=${maxResults}`,
        { method: "get", headers: { "Content-Type": "application/json" } }
      );
      const data = await response.json();

      /**save data into marketcoin table code start*/
      saveVideosData(data.items, db, channelId);
      return apiResponse.successResponseWithData(
        res,
        "Coin data fetch successfully from coingeko api!",
        data
      );
      /**save data into marketcoin table code end*/
    } catch (err) {
      return apiResponse.ErrorResponse(
        res,
        err.message || "INTERNAL SERVER ERROR"
      );
    }
  },
];

exports.getYoutubeVideos = [
  body("data")
    .isLength({ min: 1 })
    .trim()
    .withMessage("Data must be specified."),
  (req, res) => {
    db = connect();
    try {
      if(!req.query.channelId){
        return apiResponse.notFoundResponse(
          res,
          "Channel id is required!"
        )
      }
      db.youtubeVideos
        .findOne({  
          where: { channelId: req.query.channelId }
        }).then((data => {
          if (!data) {
            return apiResponse.notFoundResponse(
              res,
              "Channel id is not found!"
            )
          }
        }))
      db.youtubeVideos
        .findAll({
          attributes: { exclude: ["id"] }, where: { channelId: req.query.channelId }, order: [["id", "ASC"]],
        })
        .then((data) => {
          return apiResponse.successResponseWithData(
            res,
            "Data loaded successfully",
            { count: data.length, items: data }
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

const saveVideosData = async (data, db, channelId) => {
  let dbData = await db.youtubeVideos.findAll({ where: { channelId } });

  let newJsonData = [];
  data.map(async (res) => {
    /**check risk coin exist in db or not code start*/
    let newObj = {
      video_id: res.id.videoId,
      kind: res.kind,
      etag: res.etag,
      publishedAt: res.snippet.publishedAt,
      channelId: res.snippet.channelId,
      title: res.snippet.title,
      description: res.snippet.description,
      thumbnails_url: res.snippet.thumbnails.medium.url,
      thumbnails_width: res.snippet.thumbnails.medium.width,
      thumbnails_height: res.snippet.thumbnails.medium.height,
      channelTitle: res.snippet.channelTitle,
      liveBroadcastContent: res.snippet.liveBroadcastContent,
      publishTime: res.snippet.publishTime,
    };
    newJsonData.push(newObj)
  })
  // console.log("newJsonDatanewJsonData:",newJsonData, newJsonData.length)
  /**delete coins from db comparing with coingeko api data coin */
  deleteVideos(newJsonData, dbData, db);

  // /**update coins from db comparing with coingeko api data coin*/
  updateVideos(newJsonData, dbData, db);
  // /**save new entries into db table */
  let result = newJsonData.filter(
    (o1) => !dbData.some((o2) => o1.video_id === o2.video_id)
  );
  // console.log("resultresult;",result)
  db.youtubeVideos.bulkCreate(result)
}

const deleteVideos = async (newJsonData, dbData, db) => {
  let result1 = await dbData.filter(
    (o1) => !newJsonData.some((o2) => o1.video_id === o2.video_id)
  );
  let videoId = [];
  for (let ele of result1) {
    videoId.push(ele.video_id);
  }
  console.log("videoId:", videoId)
  await db.youtubeVideos.destroy({ where: { video_id: videoId } });
};

/**update coin function start */
const updateVideos = async (newJsonData, dbData, db) => {
  let newJson = await newJsonData.filter((o1) =>
    dbData.some((o2) => o1.video_id === o2.video_id)
  );
  console.log("newJsonnewJson:", newJson)
  for (let ele of newJson) {
    await db.youtubeVideos.update(ele, { where: { video_id: ele.video_id } });
  }
};

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
  data.map(async (res) => {
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
      sparkline_in_7d: res.sparkline_in_7d,
      last_updated: res.last_updated,
      price_change_percentage_1h_in_currency: res.price_change_percentage_1h_in_currency,
      price_change_percentage_1y_in_currency: res.price_change_percentage_1y_in_currency,
      price_change_percentage_24h_in_currency: res.price_change_percentage_24h_in_currency,
      price_change_percentage_30d_in_currency: res.price_change_percentage_30d_in_currency,
      price_change_percentage_7d_in_currency: res.price_change_percentage_7d_in_currency,
    };
    newJsonData.push(newObj)
  })
  /**delete coins from db comparing with coingeko api data coin */
  deleteCoins(newJsonData, dbData, db);

  /**update coins from db comparing with coingeko api data coin*/
  updateCoins(newJsonData, dbData, db);
  /**save new entries into db table */
  let result = newJsonData.filter(
    (o1) => !dbData.some((o2) => o1.symbol === o2.symbol)
  );
  db.marketcoin.bulkCreate(result)
  let newObj1 = {}
  await db.marketcoin.findAll({ attributes: { exclude: "id" } }).then((allCoins) => {
    allCoins.map((res) => {
      if (allRiskCoinArr.includes(res.symbol)) {
        db[res.symbol].findAll({
          attributes: { exclude: "id" },
          limit: 1,
          order: [["closetime", "DESC"]],
        }).then(async (coin) => {
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
          newObj1.risk_exist = 1
          await db.marketcoin.update(newObj1, { where: { symbol: res.symbol } })
        });
      }
    })
  });
};

/**delete coin function start */
const deleteCoins = async (newJsonData, dbData, db) => {
  let result1 = await dbData.filter(
    (o1) => !newJsonData.some((o2) => o1.symbol === o2.symbol)
  );
  let coinId = [];
  for (let ele of result1) {
    coinId.push(ele.coin_id);
  }
  await db.marketcoin.destroy({ where: { coin_id: coinId } });
};

/**update coin function start */
const updateCoins = async (newJsonData, dbData, db) => {
  let newJson = await newJsonData.filter((o1) =>
    dbData.some((o2) => o1.symbol === o2.symbol)
  );
  for (let ele of newJson) {
    await db.marketcoin.update(ele, { where: { symbol: ele.symbol } });
  }
};

const riskData = async (allRiskCoinArr, db, newObj, res) => {
  if (allRiskCoinArr.includes(res.symbol)) {
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
  else {
    return 0;
  }
}




