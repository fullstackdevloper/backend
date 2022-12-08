const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const cron = require('node-cron');
const {saveMarketCoins} = require('./controllers/CoinController')
require("dotenv").config();
const cors = require("cors");

const port = process.env.PORT || 3001;
const app = express();
app.use(bodyParser.json());

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // For legacy browser support
};
app.use(cors(corsOptions));
app.get("/", (req, res) => {
  res.send(`<h1>Polarity Digital API</h1>`);
});

require('./routes/chart.routes')(app);
require('./routes/coins/coins.routes')(app);

app.use("/api-docs", swaggerUi.serve);
app.get("/api-docs", swaggerUi.setup(swaggerDocument));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cron.schedule('* * * * *', () => {
//   // saveMarketCoins(req,res).then((res)=>{
//   //   console.log("Dddddddddddddggggggggooooo")
//   // });
//   console.log("vvvvvvvvvvvvvvvvvvvvvvvvvvvvv")
// });
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
