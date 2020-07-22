const router = require("express").Router();
const passport = require("../../middlewares/passport");
const asyncHandler = require("express-async-handler");
const cookieHandler = require("../../middlewares/cookieHandler");

router.post(
  "/",
  // Установка куки по "Запомнить меня!"
  cookieHandler,
  // Авторизация по паспорту
  asyncHandler(passport.authenticate),
  (req, res) => {
    res.json(req.user);
  }
);
