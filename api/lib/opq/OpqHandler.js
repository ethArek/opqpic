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
    try {
      console.log("tutaj");
      const start = Date.now();
      const masterKey = handle.slice(handle.length / 2);
      handle = handle.slice(0, handle.length / 2);
      const {
        data: { fileDownloadUrl }
      } = await axios.post(
        "https://broker-1.opacitynodes.com:3000/api/v1/download",
        {
          fileID: handle
        }
      );
      console.log(Date.now() - start);
      const { data: imageBuffer } = await axios.get(fileDownloadUrl + "/file");
      console.log(Date.now() - start);
    } catch (err) {
      console.log(err);
    }

    const downloadHandler = this.masterHandle.downloadFile(handle);

    downloadHandler.startDownload();

    try {
      const result = {
        buffer: await downloadHandler.toBuffer()
        // metadata: await downloadHandler.downloadMetadata()
      };
      console.log(result.buffer);
      return result;
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = OpqHandler;
