const getOpqHandler = require("../opq/getOpqHandler");

const { opqAccountHandle } = require("../../../config");
const opqHandler = getOpqHandler(opqAccountHandle);

async function uploadImage(file) {
  const imageDetails = await opqHandler.uploadImage(file);

  return imageDetails;
}

async function getDownloadUrl(handle) {
  const start = Date.now();
  const imageFile = await opqHandler.getDownloadUrl(handle);
  console.log(Date.now() - start);
  return imageFile;
}

module.exports = { uploadImage, getDownloadUrl };
