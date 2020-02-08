const router = require("express").Router();
const { uploadImage, getDownloadUrl } = require("../lib/internal/images");

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
    res.status(500).json({
      error: "Internal server error"
    });
  }
});

// router.get("/:handle", async (req, res) => {
//   try {
//     const image = await getDownloadUrl(req.params.handle);
//   } catch (err) {
//     console.log(err);
//   }

//   res.json();
// });

module.exports = router;
