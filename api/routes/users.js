const router = require("express").Router();
const User = require("../../models/User");
const { login } = require("../lib/internal/users");
const createErrorResponse = require("../lib/internal/createErrorResponse");
const auth = require("../middlewares/authentication");
require("../../db");

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  const user = new User({
    email,
    password
  });

  try {
    await user.save();
    res.json({
      data: { user }
    });
  } catch (err) {
    createErrorResponse(res, err);
  }
});

router.get("/", auth, async (req, res) => {
  try {
    res.json({
      data: { user: req.user }
    });
  } catch (err) {
    createErrorResponse(res, err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const result = await login(req.body);

    res.json({
      data: result
    });
  } catch (err) {
    createErrorResponse(res, err);
  }
});

module.exports = router;
