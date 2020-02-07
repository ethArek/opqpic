const OpqHandler = require("./OpqHandler");

const getOpqHandler = handle => {
  return new OpqHandler(handle);
};

module.exports = getOpqHandler;
