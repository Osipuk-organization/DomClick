const router = require("express").Router();
const path = require('path')

const flatsRouter = require("./flats");
const usersRouter = require("./users");
const authRouter = require("./auth");
const errorMiddleware = require("../middlewares/error");
const authenticateMiddleware = require("../middlewares/authentication");


router.post('/download', (req, res) =>{
  const file = path.resolve(__dirname, '../',req.body.url)
  res.download(file); 
});

router.use("/auth", authRouter);
router.use("/flats", flatsRouter);
router.use(authenticateMiddleware);
router.use("/users", usersRouter);
router.use(errorMiddleware);
router.get('*', function (req, res) {
    res.status(404).json({ "error": 404 });
  });

module.exports = router;
