const router = require("express").Router();
const { uploadImage, getDownloadUrl } = require("../lib/internal/images");
const createErrorResponse = require("../lib/internal/createErrorResponse");

router.post("/", async (req, res) => {
  const { file } = req.body;

  try {
    const imageDetails = await uploadImage(file);

    res.status(201).json({
      data: {
        imageDetails
      }
    });
  } catch (err) {
    createErrorResponse(res, err);
  }
});

// router.get("/:handle", async (req, res) => {
//   try {
//     const image = await getDownloadUrl(req.params.handle);
//   } catch (err) {
//     createErrorResponse(res, err);
//   }

//   res.json();
// });

module.exports = router;
