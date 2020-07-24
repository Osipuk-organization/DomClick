const consolidate = require("consolidate");
const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const dotenv = require("dotenv");
const cowsay = require("cowsay");

require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const PORT = process.env.SERVERPORT || 4000;
const router = require(path.resolve(__dirname, 'routes'));
const passport = require("./middlewares/passport");

//Mongo connect
require(path.resolve(__dirname, 'mongo_connect.js'));

const app = express();

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
    console.log(cowsay.say({
      text: `\x1b[33mServer has been started \x1b[34mhttp://localhost:${PORT}\x1b[37m`,
      e: "oO",
      T: "U "
    }))
  });