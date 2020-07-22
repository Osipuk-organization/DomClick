const token = require("./token");
const asyncHandler = require("express-async-handler");

const authenticate = asyncHandler(async (req, res, next) => {
  if (!!req.user) {
    next(); // Сначала сессия
  } else {
    req.user = await token.check(req, res);
    next();
  }
});

module.exports = authenticate;
