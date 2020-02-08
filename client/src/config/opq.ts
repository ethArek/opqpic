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
  'd24a133d9810f01fac4270d478be6401fce7178503631b89a7f3ea9f3d761a14f705f5f0096e1a427c69a431aa7d6d9e1773cc4ae79bd1a9573db975eeb19835';
