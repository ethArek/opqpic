const router = require("express").Router();
const User = require("../../models/User");
require("../../db");

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  console.log("tu");
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
    res.status(500).json({
      error: "Internal server error"
    });
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
    let status = 500;
    if (err.message === "User not found") {
      status = 404;
    }
    res.status(status).json({
      error: err.message || "Internal server error"
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findByCredentials(email, password);
    if (!user) {
      throw new Error("User not found");
    }

    const token = await user.generateAuthToken();
    const result = {
      user,
      token
    };

    res.json({
      data: result
    });
  } catch (err) {
    let status = 500;
    if (err.message === "User not found") {
      status = 404;
    }
    res.status(status).json({
      error: err.message || "Internal server error"
    });
  }
});

module.exports = router;
