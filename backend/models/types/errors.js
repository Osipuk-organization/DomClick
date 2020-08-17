const createError = require("http-errors");
const ErrorType = require("./enumErrorTypes");

const userError = {
  duplicateUser: createError(400, "Такой пользователь уже есть", {
    type: ErrorType.WARNING,
  }),
  notFoundError: createError(400, "Пользователь не найден", {
    type: ErrorType.WARNING,
  }),
};

const authError = {
  nameNotFoundError: createError(400, "Пользователь с таким именем не найден", {
    type: ErrorType.WARNING,
  }),
  duplicateUser: createError(400, "Такой пользователь уже есть", {
    type: ErrorType.WARNING,
  }),
  passwordWrongError: createError(400, "Введен неправильный пароль", {
    type: ErrorType.WARNING,
  }),
  wrongTokenError: createError(403, "Неправильный токен", {
    type: ErrorType.ERROR,
  }),
  tokenNotFoundError: createError(403, "Токен не найден", {
    type: ErrorType.ERROR,
  }),
};

const commonError = createError(
  500,
  "Ошибка на сервере!",

  { type: ErrorType.ERROR }
);

module.exports = {
  userError,
  authError,
  commonError,
};
