const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = 8081;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  res.send("WELCOME Jaya");
});

app.use(function(req, res, next) {
  const err = new Error("Not found");
  err.status = 404;
  next(err);
});

app.listen(PORT, function() {
  console.log(`Server is running on Port ${PORT}`);
});
