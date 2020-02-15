const router = require("express").Router();
const uuid = require("uuid");
const { uploadImage, getDownloadUrl } = require("../lib/internal/images");
const createErrorResponse = require("../lib/internal/createErrorResponse");

router.post("/", async (req, res) => {
  const { fileBase64, name } = req.body;

  try {
    const imageDetails = await uploadImage(fileBase64, name);

    res.status(201).json({
      data: {
        imageDetails
      }
    });
  } catch (err) {
    createErrorResponse(res, err);
  }
});

module.exports = router;
