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

export const HANDLE =
  '8e4dfb806861314e21e2e648d96fdf90070f6c782587c785731bd278cbf6d005d5cfc6add4c51bc072dc370e6d4e05acf451a81cffda7680c360380760b66f18';
