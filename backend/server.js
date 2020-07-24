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
var fs = require("fs");
var tunnel = require('tunnel-ssh');
const dotenv = require("dotenv");
const cowsay = require("cowsay");
const ansi = require('ansi');
const cursor = ansi(process.stdout);
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const app = express();
const PORT = process.env.SERVERPORT || 4000;

const tunnel_config = {
  username: process.env.SSH_USERNAME,
  password: process.env.SSH_PASSWORD,
  host: process.env.SSH_HOST,
  port: process.env.SSH_PORT,
  dstHost: process.env.SSH_DSTHOST,
  dstPort: process.env.SSH_DSTPORT,
  localHost: "127.0.0.1",
  localPort: "27000"
};

tunnel(tunnel_config, (err, server) => {
  if (err) {
    cursor.red().write("SSH connection error: " + error).write('\n').reset()
  }

  cursor.green().write('SSH ok').write('\n').reset()

  const db = mongoose.createConnection(`mongodb://127.0.0.1:27000/DomClickDev`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  cursor.green().write('Connect ok').write('\n').reset()

  db.on('error', () => {
    cursor.red().write('DB connection error').write('\n').reset().write(console).write('\n')
  }
    // console.error.bind(console, 'DB connection error:')
  );

  db.once('open', () => {
    cursor.green().write('DB connection successful').write('\n').reset()

    db.db.stats((err, stats) => {
      console.log('db.stats():', stats)
    })
  })

})
app.get('/',
  // asyncHandler(
  async (req, res) => {
    //   console.log('this')
    // const users = await UserModel.find();
    res.status(200).json({ "error": "ошибочный id" });
  })

const router = require(path.resolve(__dirname, 'routes'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use(
//   session({
//     resave: true,
//     saveUninitialized: false,
//     secret: process.env.SESSION_SECRET_PHRASE,
//     store: new MongoStore({
//       mongooseConnection: mongoose.connection,
//     }),
//   })
// );
// app.use(cookieParser(process.env.COOKIE_SECRET_KEY));
// app.use(passport.initialize);
// app.use(passport.session);
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