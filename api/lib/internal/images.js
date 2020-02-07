const getOpqAccount = require('../opq/getOpqAccount');

function uploadImage (file) {
  const account = getOpqAccount();

  const imageMeta = await account.uploadFile(file);
  console.log(imageMeta);
}

module.exports = { uploadImage };