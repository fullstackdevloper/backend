const { body, validationResult } = require("express-validator");
const CoinController = require("../../controllers/CoinController");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
  });
  app.get("/api/coin/historicalData",CoinController.getCoins);
  app.get("/api/getAllCoins",CoinController.getAllCoins);
  app.post("/api/coins/saveMarkets",CoinController.saveMarketCoins);
  app.get("/api/coins/markets",CoinController.getMarketCoins);
};
