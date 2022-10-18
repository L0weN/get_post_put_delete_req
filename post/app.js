require("dotenv/config");
const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());

const firstMiddleware = function (req, res, next) {
  console.log("Yeni bir istek geldi.");
  next();
};

const secondMiddleware = function (req, res, next) {
  console.log("Post isTeği için istek gönderildi.");
  next();
};

app.post("/hello", firstMiddleware, secondMiddleware, function (req, res) {
  res.json("Merhaba, POST isteği attınız");
});

app.listen(PORT, () => {
  console.log("Ready on http://localhost:" + PORT);
});