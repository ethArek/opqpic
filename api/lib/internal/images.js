const getOpqHandler = require("../opq/getOpqHandler");

const { opqAccountHandle } = require("../../../config");
const opqHandler = getOpqHandler(opqAccountHandle);

function decodeBase64Image(dataString) {
  var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
  var response = {};

  if (matches.length !== 3) {
    return new Error("Invalid input string");
  }

  response.type = matches[1];
  response.data = new Buffer(matches[2], "base64");

  return response;
}

async function uploadImage(fileBase64, name) {
  const buffer = Buffer.from(decodeBase64Image(fileBase64).data, "base64");
  const file = {
    name: uuid().slice(0, 6) + name,
    data: buffer
  };
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
