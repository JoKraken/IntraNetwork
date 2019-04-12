const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/IntraNetwork", {
  keepAlive: true,
  useMongoClient: true
});
