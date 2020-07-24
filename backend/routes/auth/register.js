const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const UserModel = require("../../models/user");
const Errors = require("../../models/types/errors");

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { login } = req.body.params;
    const user = await UserModel.findOne({ login });
    if (user) {
      throw Errors.authError.duplicateUser;
    }
    user = await UserModel.create(req.body);
    const plainUser = JSON.parse(JSON.stringify(user));
    delete plainUser.password;
    res.json(plainUser);
  })
);
module.exports = router;