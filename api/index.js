const router = require("express").Router();

const imagesRoutes = require("./routes/images");
const usersRoutes = require("./routes/users");

router.use("/images", imagesRoutes);
router.use("/users", usersRoutes);

module.exports = router;
