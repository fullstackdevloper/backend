const { body, validationResult } = require("express-validator");
const apiResponse = require("../helpers/apiResponse");
const { connect } = require("../config/db.config");

/**
 * add chart api.
 *
 * @param {json}      
 *
 * @returns {Object}
 */
exports.addChart = [
  async (req, res) => {
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
        let { body } = req;
        body.configuration = JSON.stringify(body.configuration)
        body.metric_tab_data = JSON.stringify(body.metric_tab_data)
        let data = await db.chart.create(body);
        return apiResponse.successResponseWithData(res, "Chart save successfully!", data)
      }
    } catch (err) {
      return apiResponse.ErrorResponse(
        res,
        err.message || "INTERNAL SERVER ERROR"
      );
    }
  },
];

exports.getChart = [
  async (req, res) => {
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
        let data = await db.chart.findAll();
        return apiResponse.successResponseWithData(res, "Chart get successfully!", data)
      }
    } catch (err) {
      return apiResponse.ErrorResponse(
        res,
        err.message || "INTERNAL SERVER ERROR"
      );
    }
  },
];

exports.getChartsByUserId = [
  async (req, res) => {
    try {
      let { user_id } = req.params;
      user_id = user_id.toString();
      if (!user_id) {
        return apiResponse.notFoundResponse(res, "user_id is required!")
      }
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return apiResponse.validationErrorWithData(
          res,
          "Validation Error.",
          errors.array()
        );
      } else {
        db = connect();
        let data = await db.chart.findAll({where:{user_id}});
        return apiResponse.successResponseWithData(res, "Charts get successfully!", data)
      }
    } catch (err) {
      return apiResponse.ErrorResponse(
        res,
        err.message || "INTERNAL SERVER ERROR"
      );
    }
  },
];


exports.updateChart = [
  async (req, res) => {
    try {
      db = connect();
      let { body, params } = req;
      let { id } = params
      if (!id) {
        return apiResponse.notFoundResponse(res, "Id is required!")
      }
      let findChart = await db.chart.findOne({ where: { id } })
      if (!findChart) {
        return apiResponse.notFoundResponse(res, "Id not found!")
      }
      body.configuration = body.configuration ? JSON.stringify(body.configuration) : {}
      let data = await db.chart.update(body, { where: { id } });
      return apiResponse.successResponseWithData(res, "Chart update successfully!", data)

    } catch (err) {
      return apiResponse.ErrorResponse(
        res,
        err.message || "INTERNAL SERVER ERROR"
      );
    }
  },
];

exports.deleteChart = [
  async (req, res) => {
    try {

      db = connect();
      let { id } = req.params
      if (!id) {
        return apiResponse.notFoundResponse(res, "Id is required!")
      }
      let findChart = await db.chart.findOne({ where: { id } })
      if (!findChart) {
        return apiResponse.notFoundResponse(res, "Id not found!")
      }
      let data = await db.chart.destroy({ where: { id } });
      return apiResponse.successResponseWithData(res, "Chart delete successfully!", data)

    } catch (err) {
      return apiResponse.ErrorResponse(
        res,
        err.message || "INTERNAL SERVER ERROR"
      );
    }
  },
];

exports.getSingleChart = [
  async (req, res) => {
    try {
      let { id } = req.params;
      if (!id) {
        return apiResponse.notFoundResponse(res, "id is required!")
      }
      db = connect();
      let data = await db.chart.findOne({ where: { id } });
      return apiResponse.successResponseWithData(res, "Chart get successfully!", data)

    } catch (err) {
      return apiResponse.ErrorResponse(
        res,
        err.message || "INTERNAL SERVER ERROR"
      );
    }
  },
];

