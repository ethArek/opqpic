const router = require('express').Router();
const uuid = require('uuid');
const { uploadImage, getDownloadUrl } = require('../lib/internal/images');
const createErrorResponse = require('../lib/internal/createErrorResponse');

router.post('/', async (req, res) => {
  const { fileBase64, name } = req.body;

  function decodeBase64Image(dataString) {
    var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    var response = {};

    if (matches.length !== 3) {
      return new Error('Invalid input string');
    }

    response.type = matches[1];
    response.data = new Buffer(matches[2], 'base64');

    return response;
  }

  try {
    const buffer = Buffer.from(decodeBase64Image(fileBase64).data, 'base64');
    const file = {
      name: uuid().slice(0, 6) + name,
      data: buffer
    };
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
