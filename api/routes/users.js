const router = require("express").Router();
const User = require("../../models/User");
const { login } = require("../lib/internal/users");
const createErrorResponse = require("../lib/internal/createErrorResponse");
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

router.get("/", async (req, res) => {
  try {
    await User.findByToken(req.body.token);
    if (!user) {
      throw new Error("User not found");
    }
    res.json({
      data: { user }
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
