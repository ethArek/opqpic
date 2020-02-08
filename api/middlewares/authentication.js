const jwt = require("jsonwebtoken");
const User = require("../../models/User");

const auth = async (req, res, next) => {
  try {
    const { token } = req.body;
    const decoded = jwt.verify(token, "lellel");
    const user = await User.findOne({
      _id: decoded._id,
      accessToken: token
    });

    if (!user) {
      throw new Error();
    }

    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ error: "Please authenticate." });
  }
};

module.exports = auth;
