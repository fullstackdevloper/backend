const { body, validationResult } = require("express-validator");
const ChartController = require("../controllers/ChartController");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
  });

  app.post("/api/charts/add-new", ChartController.addChart);
};
