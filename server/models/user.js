const mongoose = require("mongoose");
const validator = require("validator");

// 스키마 생성
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  age: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a postive number");
      }
    },
  },
  email: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  saveDate: {
    type: Date,
    default: Date.now,
  },
});

// 모델 생성
const User = mongoose.model("User", UserSchema);

module.exports = User;