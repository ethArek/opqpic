const User = require("../../../models/User");

async function login({ email, password }) {
  const user = await User.findByCredentials(email, password);
  if (!user) {
    throw new Error("User not found");
  }

  const token = await user.generateAuthToken();
  return {
    user,
    token
  };
}

module.exports = { login };
