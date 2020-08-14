const mongoose = require('mongoose')
const ansi = require('ansi')
const cursor = ansi(process.stdout)
const tunnel = require('tunnel-ssh')

const ssh = process.env.SSH === 'true'

const user = process.env.DB_USER
const pass = process.env.DB_PASSWORD
const hostdb = process.env.DB_HOST
const portdb = process.env.DB_PORT
const authdb = process.env.DB

if (ssh) {
  const tunnel_config = {
    username: process.env.SSH_USERNAME,
    password: process.env.SSH_PASSWORD,
    host: process.env.SSH_HOST,
    port: process.env.SSH_PORT,
    dstHost: process.env.SSH_DSTHOST,
    dstPort: process.env.SSH_DSTPORT,
    localHost: '127.0.0.1',
    localPort: '27000',
  }

  tunnel(tunnel_config, (error, server) => {
    if (error) {
      cursor.red().write(`SSH connection error: ${error}\n`).reset()
      return
    }

    cursor.green().write('SSH ok\n').reset()
    mongoose.set('useCreateIndex', true)
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true, 
    }
    mongoose.connect(`mongodb://${user}:${pass}@${tunnel_config.localHost}:${tunnel_config.localPort}/${authdb}`, options)
      .then(() => cursor.green().write('DB connection successful\n').reset())
      .catch(err => cursor.red().write(`DB connection error:\n`).reset().write(`${err}\n`));
  })
} else {

  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
  mongoose.connect(`mongodb://${user}:${pass}@${hostdb}:${portdb}/${authdb}`, options)
    .then(() => cursor.green().write('DB connection successful\n').reset())
    .catch(err => cursor.red().write(`DB connection error:\n`).reset().write(`${err}\n`));
}
