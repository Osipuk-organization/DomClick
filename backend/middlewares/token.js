const User = require("../models/user");
const jwt = require("jsonwebtoken");
const Errors = require("../models/types/errors");

const save = async (req, res) => {
  const { login, password } = req.body;
  const user = await User.findOne({
    login,
  });
  if (!user) {
    throw Errors.authError.nameNotFoundError;
  }
  if (user && user.comparePassword(password)) {
    const plainUser = JSON.parse(JSON.stringify(user));
    delete plainUser.password;
    let tokenValue = jwt.sign(plainUser, process.env.TOKEN_SECRET_KEY);
    console.log('tokenValue',tokenValue)
    res.cookie("token", tokenValue, {
      maxAge: 1 * 24 * 3600 * 1000, // 1 сутки
    });
  } else {
    throw Errors.authError.passwordWrongError;
  }
};

const check = async (req, res) => {
  if (!req.cookies.token) {
    throw Errors.authError.tokenNotFoundError;
  }
  let validToken = jwt.verify(req.cookies.token, process.env.TOKEN_SECRET_KEY);
  if (!validToken) throw Errors.authError.wrongTokenError;
  return validToken;
};

module.exports = {
  save,
  check,
};
