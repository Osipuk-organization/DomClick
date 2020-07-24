const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const UserModel = require("../../models/user");
const Errors = require("../../models/types/errors");

router.route('/')
  .get(
    // asyncHandler(
    async (req, res) => {
      console.log('this')
    const users = await UserModel.find();
    res.json(users);
  })
  // )
  .post(asyncHandler(async (req, res) => {
    // const { login } = req.body.params;
    // const user = await UserModel.findOne({ login });
    // if (user) {
    //   throw Errors.authError.duplicateUser;
    // }
    user = await UserModel.create(req.body);
    const plainUser = JSON.parse(JSON.stringify(user));
    delete plainUser.password;
    res.json(plainUser);
  }))
  .put(asyncHandler(async (req, res) => {
    const user = { ...req.body };
    const updatedUser = JSON.parse(
      JSON.stringify(
        await UserModel.findByIdAndUpdate(user._id, user, { new: true })
      )
    );
    delete updatedUser.password;
    res.json(updatedUser);
  })
  );

router.route("/:id")
  .get(asyncHandler(async (req, res) => {
    let user = UserModel.findById(req.params.id);
    if (!user) throw Errors.userError.notFoundError;
    let plainUser = JSON.parse(JSON.stringify(user));
    delete plainUser.password;
    res.json(plainUser);
  }))
  .delete(asyncHandler(async (req, res) => {
    let id = req.params.id;
    let deleted = await UserModel.findByIdAndDelete(id);
    if (!deleted) throw Errors.commonError;
    res.json({ userDeleted: true });
  }));

module.exports = router;
