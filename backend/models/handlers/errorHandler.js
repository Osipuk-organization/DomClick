const createError = require("http-errors");

const ErrorHandler = function (error, doc, next) {
  if (error) {
    next(createError(error.status, error.message, { type: error.type }));
  } else {
    next();
  }
};

module.exports = { ErrorHandler };
