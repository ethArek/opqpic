const mongoose = require("mongoose");
const validator = require("validator");
const _ = require("lodash");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "E-mail was not provided"],
    trim: true,
    unique: [true, "E-mail is already used"],
    minlength: 1,
    validate: {
      validator: value => {
        return validator.isEmail(value);
      },
      message: "Email is invalid"
    }
  },
  password: {
    type: String,
    required: [true, "Password wasn't provided"],
    minlength: [6, "Password need to have more than 6 characters"]
  },
  images: [
    {
      name: {
        type: String,
        required: true
      },
      handle: {
        type: String,
        required: true
      },
      alternativeHandle: {
        type: String,
        required: false
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
    }
  ],
  active: {
    type: Boolean,
    default: true
  },
  accessToken: {
    type: String
  }
});

UserSchema.pre("save", function(next) {
  const user = this;
  if (user.isModified("password")) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

UserSchema.methods.toJSON = function() {
  const user = this;
  const userObject = user.toObject();

  return _.pick(userObject, ["_id", "imageHandles"]);
};

UserSchema.statics.findByCredentials = async function(email, password) {
  const User = this;
  const user = await User.findOne({ email });
  if (!user) {
    return Promise.reject(new Error("User not found"));
  }

  return new Promise(async (resolve, reject) => {
    const result = await bcrypt.compare(password, user.password);
    if (!result) {
      reject("user.invalid_password");
    } else {
      resolve(user);
    }
  });
};

UserSchema.methods.generateAuthToken = async function() {
  try {
    const user = this;
    const access = "auth";
    const token = jwt
      .sign({ _id: user._id.toHexString(), access }, "lellel")
      .toString();
    user.accessToken = token;
    await user.save();
    return token;
  } catch (err) {}
};

UserSchema.statics.findByToken = function(token) {
  var User = this;
  var decoded;

  try {
    decoded = jwt.verify(token, "lellel");
  } catch (e) {
    return Promise.reject();
  }

  return User.findOne({
    _id: decoded._id,
    accessToken: token
  });
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
