const router = require("express").Router;
const { uploadImage } = require("../lib/internal/images");

router.post("/", async (req, res) => {
  const { file } = req.body;
});
