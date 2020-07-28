const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UniqueValidator = require("mongoose-unique-validator");
const ErrorHandler = require("./handlers/errorHandler");
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
  login: { type: String, required: true, index: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
});

userSchema.methods.comparePassword = function (candidate) {
  return bcrypt.compareSync(candidate, this.password);
};

userSchema.pre("save", function (next) {
  if (this.isModified("password")) {
    const salt = bcrypt.genSaltSync(+process.env.SALT_ROUNDS);
    this.password = bcrypt.hashSync(this.password, salt);
  }
  next();
});
userSchema.post("findOne", ErrorHandler.ErrorHandler);
userSchema.post("findOneAndUpdate", ErrorHandler.ErrorHandler);
userSchema.post("save", ErrorHandler.ErrorHandler);
userSchema.plugin(UniqueValidator);

module.exports = mongoose.model("User", userSchema);
