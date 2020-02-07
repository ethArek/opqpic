const router = require("express").Router();

const imageRoutes = require("./routes/images");

router.use("/images", imageRoutes);

module.exports = router;
