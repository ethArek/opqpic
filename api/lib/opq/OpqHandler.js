const { MasterHandle, decrypt } = require("opaque");
const { UPLOAD_OPTIONS, DOWNLOAD_OPTIONS } = require("./config");
const axios = require("axios");
const fs = require("fs");
const _crypto = require("crypto");

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

  async getImageData(handle) {
    const downloadHandler = this.masterHandle.downloadFile(handle);
    downloadHandler.startDownload();

    try {
      const result = {
        buffer: await downloadHandler.toBuffer()
        // metadata: await downloadHandler.downloadMetadata()
      };
      return result;
    } catch (err) {}
  }
}

module.exports = OpqHandler;
