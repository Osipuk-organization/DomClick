const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') });

const mongoose = require('mongoose');
const faker = require('faker/locale/ru');
const request = require('request');

const tunnel = require('tunnel-ssh');
const ansi = require('ansi');
const cursor = ansi(process.stdout);

const Flat = require('../models/flat');

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

function getImage() {
  return new Promise((resolve, reject) => {
    request({ url: 'https://picsum.photos/800/800', followRedirect: false }, (err, res, body) => {
      resolve(res.headers.location);
    });
  })
}

async function importSeeds() {
  await tunnel(tunnel_config, (error, server) => {
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

  await Flat.deleteMany({});

  for (let i = 1; i <= 50; i++) {
    const flat = new Flat({
      owner: faker.name.findName(),
      documents: [],
      cadastral_value: {
        value: Math.floor(Math.random() * (5000000 + 1 - 500000)),
        comment: faker.lorem.paragraph(),
      },
      address: {
        comment: faker.lorem.paragraph(),
        city: faker.address.city(),
        streetName: faker.address.streetName(),
        county: faker.address.county(),
        state: faker.address.state(),
        latitude: faker.address.latitude(),
        longitude: faker.address.longitude(),
      },
      deal: {
        comment: faker.lorem.paragraph(),
        type_deal: faker.random.arrayElement(['Продажа', 'Аренда']),
        property_type: faker.random.arrayElement(['Жилая', 'Коммерческая', 'Гараж']),
        type_of_property: faker.random.arrayElement(['Квартира', 'Комната', 'Дом', 'Таунхаус', 'Часть дома', 'Участок',]),
        years_in_ownership: faker.random.arrayElement(['Меньше 3-х', 'От 3-х до 5-ти', 'Больше 5-ти']),
        number_of_owners: {
          value: faker.random.arrayElement(['1', '2', '3+']),
          minor_child: faker.random.boolean(),
        },
        registered: {
          value: faker.random.arrayElement(['1', '2', '3+']),
          minor_child: faker.random.boolean(),
        },
      },
      terms_of_sale: {
        comment: faker.lorem.paragraph(),
        cost: {
          value: Math.floor(Math.random() * (5000000 + 1 - 500000)),
          trade: faker.random.boolean(),
        },
        gas: faker.random.boolean(),
        refuse_chute: faker.random.boolean(),
      },
      additionally: {
        security: {
          comment: faker.lorem.paragraph(),
          value: [],
        },
        parking: {
          comment: faker.lorem.paragraph(),
          value: [],
        },
        the_landscaping_of_the_yard: {
          comment: faker.lorem.paragraph(),
          value: [],
        },
        infrastructure: {
          comment: faker.lorem.paragraph(),
          value: [],
        },
        bathroom: {
          comment: faker.lorem.paragraph(),
          value: faker.random.arrayElement(['Совмещенный', 'Раздельный', 'Более одного']),
        },
        balcony: {
          comment: faker.lorem.paragraph(),
          value: faker.random.arrayElement(['1', '2', '3+', 'Нет']),
        },
        repair: {
          comment: faker.lorem.paragraph(),
          value: faker.random.arrayElement(['Косметический', 'Евро', 'Дизайнерский', 'Без ремонта']),
          replanning: faker.random.boolean(),
        },
        view_from_windows: {
          comment: faker.lorem.paragraph(),
          value: [],
        }
      },
      house: {
        comment: faker.lorem.paragraph(),
        security: faker.lorem.paragraph(),
        type: faker.random.arrayElement(['Кирпичный', 'Панельный', 'Монолитный', 'Деревянный', 'Блочный']),
        elevator: {
          value: faker.random.arrayElement(['1', '2', '3+']),
          freight_elevator: faker.random.boolean(),
        },
        apartment_number: Math.floor(Math.random() * (300 + 1 - 1)),
        cadastral_number: Math.floor(Math.random() * (10000 + 1 - 1000)),
        foto: {
          comment: faker.lorem.paragraph(),
          value: [],
        },
        video: {
          comment: faker.lorem.paragraph(),
          value: [],
        },
      },
      flat: {
        comment: faker.lorem.paragraph(),
        rooms: faker.random.arrayElement(['1', '2', '3', '4', '5+', 'Студия']),
        freight_elevator: faker.random.boolean(),
        square: Math.floor(Math.random() * (300)),
        square_kitchen: Math.floor(Math.random() * (50)),
        square_residential: Math.floor(Math.random() * (300)),
        floor: Math.floor(Math.random() * (100 + 1 - 1)),
        floors_in_the_house: Math.floor(Math.random() * (100 + 1 - 1)),
        ceiling_height: Math.floor(Math.random() * (5 + 1 - 1)),
      },
    });
    for (let j = 1; j <= faker.random.number({ min: 2, max: 10 }); j++) {
      flat.house.foto.value.push(await getImage())
      console.log(`Get image ${j} for ${flat.owner}`);
    }
    for (let h = 0; h < 3; h++) {
      flat.additionally.security.value.push('value')
      flat.additionally.parking.value.push('value')
      flat.additionally.the_landscaping_of_the_yard.value.push('value')
      flat.additionally.infrastructure.value.push('value')
      flat.additionally.view_from_windows.value.push('value')
    }

    await flat.save();
    cursor.green().write(`Created flat ${i} ${flat.owner}\n`).reset()
  }

  process.exit();
}

importSeeds();
