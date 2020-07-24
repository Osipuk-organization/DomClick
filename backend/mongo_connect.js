const mongoose = require('mongoose');
const ansi = require('ansi');
const cursor = ansi(process.stdout); 
let tunnel = require('tunnel-ssh');

const ssh = false

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

if (ssh) {
    tunnel(tunnel_config, (error, server) => {
        if (error) {
            cursor.red().write(`SSH connection error: ${error}\n`).reset()
        }

        cursor.green().write('SSH ok\n').reset()

        const db = mongoose.createConnection(`mongodb://127.0.0.1:27000/DomClickDev`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        cursor.green().write('Connect ok\n').reset()

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
    mongoose.connect(`mongodb://osipuk.ru:27017/DomClickDev`, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            cursor.green().write('\nDB connection successful').write('\n').reset()
        })
        .catch(() => {
            cursor.red().write('\nDB connection error').write('\n').reset()
        });

}






