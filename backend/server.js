const consolidate = require("consolidate");
const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const passport = require("./middlewares/passport");

if (!process.env.PRODUCTION) {
  const dotenv = require("dotenv");
  dotenv.config();
}

const app = express();

const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

mongoose.connection
  .on("error", () => {
    console.log("connection error");
  })
  .once("open", () => {
    console.log("Database connected");
  });

const router = require(path.resolve(__dirname, ".", "routes"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(
  session({
    resave: true,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET_PHRASE,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
    }),
  })
);
app.use(cookieParser(process.env.COOKIE_SECRET_KEY));
app.use(passport.initialize);
app.use(passport.session);
app.use(router);

app.set("view engine", "pug");
app.set("views", path.resolve(__dirname, "views"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

//server listen
app.listen(PORT, () => {
  console.log(`Server has been started http://localhost:${PORT}`);
});
