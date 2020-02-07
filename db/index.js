const mongoose = require("mongoose");
const globalVars = require("../config");

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

mongoose.connect(globalVars.dbConnection);
mongoose.Promise = global.Promise;

module.exports = mongoose;
