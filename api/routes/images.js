const router = require("express").Router();
const { uploadImage, downloadImage } = require("../lib/internal/images");

router.post("/", async (req, res) => {
  const { file } = req.body;
});

router.get("/:handle", async (req, res) => {
  try {
    const image = await downloadImage(req.params.handle);
    console.log(image);
  } catch (err) {
    console.log(err);
  }

  res.json();
});

module.exports = router;
