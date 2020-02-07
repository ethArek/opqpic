const { MasterHandle } = require("opaque");
const { UPLOAD_OPTIONS, DOWNLOAD_OPTIONS } = require("./config");

class OpqHandler {
  constructor(handle) {
    this.masterHandle = this.generateMasterHandle(handle);
  }

  generateMasterHandle(handle) {
    return new MasterHandle(
      { handle },
      { uploadOpts: UPLOAD_OPTIONS, downloadOpts: DOWNLOAD_OPTIONS }
    );
  }

  uploadImage(file) {
    return new Promise((resolve, reject) => {
      const upload = this.masterHandle.uploadFile("/", file);

      upload.on("finish", res => {
        resolve(res);
      });
    });
  }

  downloadImage(handle) {
    return new Promise(async (resolve, reject) => {
      console.log(this.masterHandle);
      const download = this.masterHandle;

      download.on("download-progress", res => {
        resolve(res);
      });
    });
  }
}

module.exports = OpqHandler;
