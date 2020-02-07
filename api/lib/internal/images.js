const getOpqAccount = require('../opq/getOpqAccount');

function uploadImage (file) {
  const account = getOpqAccount();

  const imageMeta = await account.uploadFile(file);
}

module.exports = { uploadImage };