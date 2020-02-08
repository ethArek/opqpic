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
    "a28ed0e967b5f73a0ea2033976f936bd2543b6954bb9674b921b79eeb01eff805cbb62d29d1306accded394fc3553b3ea0455d641fb5c818e1565ff8daa37fb3"
  );
  console.log(Date.now() - start);
  return imageFile;
}

module.exports = { uploadImage, downloadImage };
