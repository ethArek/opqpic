const API = {
  STORAGE_NODE: 'https://broker-1.opacitynodes.com:3000'
};

export const UPLOAD_OPTIONS = {
  autostart: true,
  endpoint: API.STORAGE_NODE,
  params: {
    blockSize: 64 * 1024, // 256 KiB encryption blocks
    partSize: 10 * 1024 * 1024
  }
};

export const DOWNLOAD_OPTIONS = {
  endpoint: API.STORAGE_NODE,
  autostart: true
};
