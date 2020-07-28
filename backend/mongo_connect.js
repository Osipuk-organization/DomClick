const mongoose = require('mongoose');
const ansi = require('ansi');
const cursor = ansi(process.stdout); 
const tunnel = require('tunnel-ssh');

const ssh = true

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

const user = process.env.DB_USER
const pass = process.env.DB_PASSWORD
const hostdb = process.env.DB_HOST
const portdb = process.env.DB_PORT
const authdb = process.env.DB

if (ssh) {
    tunnel(tunnel_config, (error, server) => {
        if (error) {
            cursor.red().write(`SSH connection error: ${error}\n`).reset()
        }

        cursor.green().write('SSH ok\n').reset()

        mongoose.connect(`mongodb://${user}:${pass}@${tunnel_config.localHost}:${tunnel_config.localPort}/${authdb}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        cursor.green().write('Connect ok\n').reset()
        const db = mongoose.connection;
        db.on('error', (error) => {
            cursor.red().write(`DB connection error:\n`).reset().write(`${error}\n`)
        }
            // console.error.bind(console, 'DB connection error:')
        );

        db.once('open', () => {
            cursor.green().write('DB connection successful\n').reset()

            // db.db.stats((err, stats) => {
            //     console.log('db.stats():', stats)
            // })
        })
    })
} else {
    mongoose.connect(`mongodb://${user}:${pass}@${hostdb}:${portdb}/${authdb}`, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            cursor.green().write('\nDB connection successful').write('\n').reset()
        })
        .catch(() => {
            cursor.red().write('\nDB connection error').write('\n').reset()
        });

}






