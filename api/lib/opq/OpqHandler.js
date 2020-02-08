const { MasterHandle } = require("opaque");
const { UPLOAD_OPTIONS, DOWNLOAD_OPTIONS } = require("./config");
const axios = require("axios");
const fs = require("fs");
const _crypto = require("crypto");

function decrypt(encdata, masterkey) {
  // base64 decoding
  const bData = Buffer.from(encdata, "base64");

  // convert data to buffers
  const salt = bData.slice(0, 64);
  const iv = bData.slice(64, 80);
  const tag = bData.slice(80, 96);
  const text = bData.slice(96);

  // derive key using; 32 byte key length
  const key = _crypto.pbkdf2Sync(masterkey, salt, 2145, 32, "sha512");

  // AES 256 GCM Mode
  const decipher = _crypto.createDecipheriv("aes-256-gcm", key, iv);
  decipher.setAuthTag(tag);

  // encrypt the given text
  const decrypted =
    decipher.update(text, "binary", "utf8") + decipher.final("utf8");

  return decrypted;
}

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
        buffer: await downloadHandler.toBuffer(),
        metadata: await downloadHandler.downloadMetadata()
      };
      return result;
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = OpqHandler;
