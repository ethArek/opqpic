const { MasterHandle } = require("opaque");
const { UPLOAD_OPTIONS, DOWNLOAD_OPTIONS } = require("./config");

class Account {
  constructor(handle) {
    this.masterHandle = this.generateMasterHandle(handle);
  }

  generateMasterHandle(handle) {
    return new MasterHandle(
      { handle },
      { uploadOpts: UPLOAD_OPTIONS, downloadOpts: DOWNLOAD_OPTIONS }
    );
  }

  uploadFile(file) {
    return new Promise((resolve, reject) => {
      const upload = this.masterHandle.uploadFile("/", file);

      upload.on("finish", res => {
        resolve(res);
      });
    });
  }
}

module.exports = Account;
