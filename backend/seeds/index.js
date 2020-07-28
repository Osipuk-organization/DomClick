const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') });

const mongoose = require('mongoose');
const faker = require('faker');
const request = require('request');

const tunnel = require('tunnel-ssh');
const ansi = require('ansi');
const cursor = ansi(process.stdout);
// faker.locale = "ru";

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

  for (let i = 0; i < 50; i++) {
    const flat = new Flat({
      owner: faker.name.findName(),
      documents: [],
      cadastral_value: {
        value: faker.random.number(),
        // comment: faker.lorem.paragraph(),
      },
      address: {
        value: `${faker.address.state()} ${faker.address.city()} ${faker.address.streetAddress()}`,
        // comment: faker.lorem.paragraph(),
      },
      deal: {
        // comment: faker.lorem.paragraph(),
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
        // comment: faker.lorem.paragraph(),
        cost: {
          value: faker.random.number(),
          trade: faker.random.boolean(),
        },
        gas: faker.random.boolean(),
        refuse_chute: faker.random.boolean(),
      },
      additionally: {
        security: {
          // comment: faker.lorem.paragraph(),
          doorphone: faker.random.boolean(),
          concierge: faker.random.boolean(),
          code_door: faker.random.boolean(),
          closed_territory: faker.random.boolean(),
        },
        parking: {
          // comment: faker.lorem.paragraph(),
          in_the_courtyard: faker.random.boolean(),
          underground: faker.random.boolean(),
          barrier: faker.random.boolean(),
          garage: faker.random.boolean(),
          security: faker.random.boolean(),
        },
        the_landscaping_of_the_yard: {
          // comment: faker.lorem.paragraph(),
          childrens_playground: faker.random.boolean(),
          sports_ground: faker.random.boolean(),
        },
        infrastructure: {
          // comment: faker.lorem.paragraph(),
          school: faker.random.boolean(),
          fitness: faker.random.boolean(),
          park: faker.random.boolean(),
          kindergarten: faker.random.boolean(),
          childrens_playmallround: faker.random.boolean(),
        },
        bathroom: {
          // comment: faker.lorem.paragraph(),
          value: faker.random.arrayElement(['Совмещенный', 'Раздельный', 'Более одного']),
        },
        balcony: {
          // comment: faker.lorem.paragraph(),
          value: faker.random.arrayElement(['1', '2', '3+', 'Нет']),
        },
        repair: {
          // comment: faker.lorem.paragraph(),
          value: faker.random.arrayElement(['Косметический', 'Евро', 'Дизайнерский', 'Без ремонта']),
          replanning: faker.random.boolean(),
        },
        view_from_windows: {
          // comment: faker.lorem.paragraph(),
          yard: faker.random.boolean(),
          street: faker.random.boolean(),
          park: faker.random.boolean(),
          reservoir: faker.random.boolean(),
          forest: faker.random.boolean(),
        }
      },
      house: {
        // comment: faker.lorem.paragraph(),
        // security: faker.lorem.paragraph(),
        type: faker.random.arrayElement(['Кирпичный', 'Панельный', 'Монолитный', 'Деревянный', 'Блочный']),
        elevator: {
          value: faker.random.arrayElement(['1', '2', '3+']),
          freight_elevator: faker.random.boolean(),
        },
        apartment_number: faker.random.number(),
        cadastral_number: faker.random.number(),
        foto: {
          // comment: faker.lorem.paragraph(),
          value: [],
        },
        video: {
          // comment: faker.lorem.paragraph(),
          value: [],
        },
      },
      flat: {
        // comment: faker.lorem.paragraph(),
        rooms: faker.random.arrayElement(['1', '2', '3', '4', '5+', 'Студия']),
        freight_elevator: faker.random.boolean(),
        square: faker.random.number(),
        square_kitchen: faker.random.number(),
        square_residential: faker.random.number(),
        floor: faker.random.number(),
        floors_in_the_house: faker.random.number(),
        ceiling_height: faker.random.number(),
      },
    });

    await flat.save();
    console.log(`Created flat ${flat.owner}`);
  }

  process.exit();
}

importSeeds();