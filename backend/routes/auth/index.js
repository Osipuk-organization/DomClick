const router = require("express").Router();
const registerRouter = require("./register");
const signinRouter = require("./signin");
const logoutRouter = require("./logout");

router.use("/register", registerRouter);
router.use("/signin", signinRouter);
router.use("/logout", logoutRouter);

module.exports = router;
