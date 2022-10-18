require("dotenv/config");
const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());

const middleware = function (req, res, next) {
  console.log("Yeni bir istek geldi.");
  next();
};

app.put("/hello", middleware, function (req, res) {
  res.json("Merhaba, PUT isteği attınız");
});

app.listen(PORT, () => {
  console.log("Ready on http://localhost:" + PORT);
});