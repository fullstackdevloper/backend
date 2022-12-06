const { body, validationResult } = require("express-validator");
const apiResponse = require("../helpers/apiResponse");
const { connect } = require("../config/db.config");
// let db = require("../models");
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
        let query =['closetime',
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
        let { coin,metric,limit } = req.query
        coin = coin?coin:'btc'
          if(metric!== undefined){
            query = [metric]
          }
          limit = limit?limit:500
          db[coin].findAll({attributes:query,limit}).then((data)=>{
            return apiResponse.successResponseWithData(
                res,
                "Data loaded successfully",
                data
              );
          })
      } catch (err) {
        console.log("errrrrrrrRR:",err)
        return apiResponse.ErrorResponse(
          res,
          err.message || "INTERNAL SERVER ERROR"
        );
      }
    },
  ];