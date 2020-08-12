const morgan = require('morgan')
const express = require('express')
const addRequestId = require('express-request-id')({ setHeader: false });
const fs = require('fs')
const path = require('path')

const app = express()
app.use(addRequestId)

morgan.token('id', (req) => req.id.split('-')[0])
const loggerFormat1 = '[:date[iso] #:id] Started :method :url for :remote-addr'
const loggerFormat2 =
  '[:date[iso] #:id] Completed :status :res[content-length] in :response-time ms'
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'access.log'),
  { flags: 'a' }
)

app.use(morgan(loggerFormat1, { stream: accessLogStream }))
app.use(morgan(loggerFormat2, { stream: accessLogStream }))