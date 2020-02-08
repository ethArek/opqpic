const fs = require("fs");
const getOpqHandler = require("../opq/getOpqHandler");

async function uploadImage(file) {
  const opqHandler = getOpqHandler(
    "8e4dfb806861314e21e2e648d96fdf90070f6c782587c785731bd278cbf6d005d5cfc6add4c51bc072dc370e6d4e05acf451a81cffda7680c360380760b66f18"
  );
  const imageMeta = await opqHandler.uploadImage(file);
}

async function downloadImage(handle) {
  handle =
    "8e4dfb806861314e21e2e648d96fdf90070f6c782587c785731bd278cbf6d005d5cfc6add4c51bc072dc370e6d4e05acf451a81cffda7680c360380760b66f18";
  const opqHandler = getOpqHandler(handle);
  const start = Date.now();
  const imageFile = await opqHandler.getImageData(
    "eb5e7a688e67d6327cd399ed16c8e1a9c726cc69821d057ea18a7b84d7f5eb6f1a1bcd841d92e1a33099ba1c0754f353eec667a72e972ae58c860e54f00fe3dc"
  );
  console.log(Date.now() - start);
  return imageFile;
}

module.exports = { uploadImage, downloadImage };
