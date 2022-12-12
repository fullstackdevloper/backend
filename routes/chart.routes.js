const { body, validationResult } = require("express-validator");
const ChartController = require("../controllers/ChartController");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
  });

  app.post("/api/charts/add", ChartController.addChart);
  app.get("/api/charts/get", ChartController.getChart);
  app.get("/api/chart/:id", ChartController.getSingleChart);
  app.put("/api/charts/update/:id", ChartController.updateChart);
  app.delete("/api/charts/delete/:id", ChartController.deleteChart);

};
