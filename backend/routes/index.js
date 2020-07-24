const router = require("express").Router();
const flatsRouter = require("./flats");
const usersRouter = require("./users");
const authRouter = require("./auth");
const errorMiddleware = require("../middlewares/error");
const authenticateMiddleware = require("../middlewares/authentication");

router.use("/auth", authRouter);
// router.use(authenticateMiddleware);
router.use("/flats", flatsRouter);
router.use("/users", usersRouter);
router.use(errorMiddleware);

module.exports = router;
