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
  return opqHandler.downloadImage(
    "4259dbbe844729980d688ce5b53795c89998e53cfba894de38beb05728a1b97191d7711b018c78647b1c2e26e3126e15a2f625fde26e5d928970608e2063f246"
  );
  // console.log(image);
}

module.exports = { uploadImage, downloadImage };
