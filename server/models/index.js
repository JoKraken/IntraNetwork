const User = require("./user");
const Message = require("./message");
const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose
  .connect("mongodb://jaya:jaya123@ds135726.mlab.com:35726/intranetwork", {
    keepAlive: true,
    useNewUrlParser: true
  })
  .catch(function(reason) {
    console.log("Unable to connect to the mongodb instance. Error: ", reason);
  });

module.exports = { User, Message };
