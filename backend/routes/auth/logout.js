const router = require("express").Router();
const token = require("../../middlewares/token");
const Errors = require("../../models/types/errors");
const asyncHandler = require("express-async-handler");

router.get(
  "/",
  asyncHandler(async (req, res) => {
    let currentUser = req.user;
    await token
      .check(req, res)
      .then((user) => {
        if (user._id === currentUser._id) {
          res.clearCookie("token");
        }
      })
      .catch((err) => {
        throw Errors.commonError;
      });
    req.logout();
    res.clearCookie("connect.sid");
    res.json({ success: true });
  })
);

module.exports = router;
