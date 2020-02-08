const fs = require("fs");
const getOpqHandler = require("../opq/getOpqHandler");

const OPQ_HANDLE =
  "8e4dfb806861314e21e2e648d96fdf90070f6c782587c785731bd278cbf6d005d5cfc6add4c51bc072dc370e6d4e05acf451a81cffda7680c360380760b66f18";
const opqHandler = getOpqHandler(OPQ_HANDLE);

async function uploadImage(file) {
  const imageMeta = await opqHandler.uploadImage(file);
}

async function downloadImage(handle) {
  const start = Date.now();
  const imageFile = await opqHandler.getImageData(handle);
  console.log(Date.now() - start);
  return imageFile;
}

module.exports = { uploadImage, downloadImage };
