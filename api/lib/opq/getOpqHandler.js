const OpqHandler = require("./OpqHandler");

let opqHandler = null;

const getOpqHandler = handle => {
  return opqHandler ? opqHandler : (opqHandler = new OpqHandler(handle));
};

module.exports = getOpqHandler;
