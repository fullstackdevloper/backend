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
  // body("user_id").isLength({ min: 1 }).trim().withMessage("User ID is not empty."),
  // body("configuration").isLength({ min: 1 }).trim().withMessage("Configuration is not empty."),
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
        let data = await db.chart.create(body);
        return apiResponse.successResponseWithData(res,"Chart save successfully!",data)
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
  // body("user_id").isLength({ min: 1 }).trim().withMessage("User ID is not empty."),
  // body("configuration").isLength({ min: 1 }).trim().withMessage("Configuration is not empty."),
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
        return apiResponse.successResponseWithData(res,"Chart get successfully!",data)
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
  // body("user_id").isLength({ min: 1 }).trim().withMessage("User ID is not empty."),
  // body("configuration").isLength({ min: 1 }).trim().withMessage("Configuration is not empty."),
  async (req, res) => {
    try {
        db = connect();
        let {body,params} = req;
        let {id} = params
        if(!id){
          return apiResponse.notFoundResponse(res,"Id is required!")
        }
        let findChart = await db.chart.findOne({where:{id}})
        if(!findChart){
          return apiResponse.notFoundResponse(res,"Id not found!")
        }
        body.configuration = body.configuration?JSON.stringify(body.configuration):{}
        let data = await db.chart.update(body,{where:{id}});
        return apiResponse.successResponseWithData(res,"Chart update successfully!",data)
      
    } catch (err) {
      return apiResponse.ErrorResponse(
        res,
        err.message || "INTERNAL SERVER ERROR"
      );
    }
  },
];

exports.deleteChart=[
  // body("user_id").isLength({ min: 1 }).trim().withMessage("User ID is not empty."),
  // body("configuration").isLength({ min: 1 }).trim().withMessage("Configuration is not empty."),
  async (req, res) => {
    try {
     
        db = connect();
        let {id} = req.params
        if(!id){
          return apiResponse.notFoundResponse(res,"Id is required!")
        }
        let findChart = await db.chart.findOne({where:{id}})
        if(!findChart){
          return apiResponse.notFoundResponse(res,"Id not found!")
        }
        let data = await db.chart.destroy({where:{id}});
        return apiResponse.successResponseWithData(res,"Chart delete successfully!",data)
      
    } catch (err) {
      return apiResponse.ErrorResponse(
        res,
        err.message || "INTERNAL SERVER ERROR"
      );
    }
  },
];

