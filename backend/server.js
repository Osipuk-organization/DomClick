'use strict';
const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const dotenv = require('dotenv')
const cowsay = require('cowsay')
const helmet = require('helmet')

//variables
dotenv.config({ path: path.resolve(__dirname, '.env') })

const PORT = process.env.SERVER_PORT || 4000
const router = require(path.resolve(__dirname, 'routes'))
const passport = require('./middlewares/passport')

//Mongo connect
require(path.resolve(__dirname, 'mongo_connect.js'))

const app = express()
app.use(helmet());

//Logger
require(path.resolve(__dirname, 'logger.js'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(
  session({
    resave: true,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET_PHRASE,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
    }),
    cookie: {
      // secure: true,
      // httpOnly: true,
      // maxAge : 3600000,
      // domain: 'example.com',
      // path: 'foo/bar',
      // expires: expiryDate
    }
  })
)
app.use(cookieParser(process.env.COOKIE_SECRET_KEY))
app.use(passport.initialize)
app.use(passport.session)
// disablse cache
// app.set('etag', false)
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private')
  next()
})
// const multer = require('multer')
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/')
//     },
//     filename: (req, file, cb) => {
//         const filename = `${file.fieldname}--${new Date().toLocaleDateString()}--${new Date().toLocaleTimeString().replace(/:/g, '-')}--${file.originalname}`;
//         cb(null, filename)
//     }
// })
// const upload = multer(
//     {
//         storage: storage,
//         limits: { fileSize: 1024 * 1024 * 3 },
//         // fileFilter: fileFilter 
//     }
// ).fields([{
//     name: 'filedata',
//     maxCount: 4
// }]);

// app.post("/upload", (req, res, next) => {
//   upload(req, res, (err) => {
//     if (err instanceof multer.MulterError) {
//       // Ошибка multer
//       res.status(500).send(err);
//       return
//     } else if (err) {
//       // При загрузке произошла неизвестная ошибка.
//       res.status(500).send(err);
//       return
//     }
//     console.log('1',req.files)
//     console.log('2',req.body)
//     const files = req.files.filedata;
//     console.log('FILES',files)
//     if (!files) {
//       res.status(400).send({
//         status: false,
//         data: 'No files is selected.'
//       });
//     } else {
//       let data = [];

//       files.map(p => data.push({
//         name: p.originalname,
//         mimetype: p.mimetype,
//         size: p.size
//       }));
//       // files.map(p => data.push({
//       //   name: p.originalFilename,
//       //   path: p.path,
//       //   size: p.size
//       // }));

//       res.send({
//         status: true,
//         message: 'Photos are uploaded.',
//         data: data
//       });
//     }
//   })
// });


app.use(router)

app.set('view engine', 'pug')
app.set('views', path.resolve(__dirname, 'views'))
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))

//server listen
app.listen(PORT, '0.0.0.0', () => {
  console.log(
    cowsay.say({
      text: `\x1b[33mServer has been started \x1b[34mhttp://localhost:${PORT}\x1b[37m`,
      e: 'oO',
      T: 'U ',
    })
  )
})
