const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dealSchema = new Schema({
  _id: false,
  comment: { type: String, },
  type_deal: { // Тип сделки
    type: String,
    enum: ['Продажа', 'Аренда',],
    required: true,
  },
  property_type: { //Вид недвижимости
    type: String,
    enum: ['Жилая', 'Коммерческая', 'Гараж',],
    required: true,
  },
  type_of_property: { //Тип недвижимости
    type: String,
    enum: [
      'Квартира',
      'Комната',
      'Дом',
      'Таунхаус',
      'Часть дома',
      'Участок',
    ],
    required: true,
  },
  years_in_ownership: { //Лет в собственности
    type: String,
    enum: ['Меньше 3-х', 'От 3-х до 5-ти', 'Больше 5-ти',],
    required: true,
  },
  number_of_owners: { // Количество собственников
    value: {
      type: String,
      enum: ['1', '2', '3+'],
      required: true,
    },
    minor_child: { type: Boolean, required: true, default: false, } //Не совершеннолетние
  },
  registered: { //Прописано
    value: {
      type: String,
      enum: ['1', '2', '3+'],
      required: true,
    },
    minor_child: { type: Boolean, required: true, default: false, } //Не совершеннолетние
  },
});

const terms_of_saleSchema = new Schema({
  _id: false,
  comment: { type: String, },
  cost: { //Цена
    value: { type: Number, required: true, },
    trade: { type: Boolean, required: true, default: false, } //Торг
  },
  gas: { type: Boolean, required: true, },
  refuse_chute: { type: Boolean, required: true, }, //Мусоропровод
});

const additionallySchema = new Schema({
  _id: false,
  security: {
    comment: { type: String, },
    doorphone: { type: Boolean, required: true, default: false, },
    concierge: { type: Boolean, required: true, default: false, },
    code_door: { type: Boolean, required: true, default: false, },
    closed_territory: { type: Boolean, required: true, default: false, },
  },
  parking: {
    comment: { type: String, },
    in_the_courtyard: { type: Boolean, required: true, default: false, }, //Во дворе
    underground: { type: Boolean, required: true, default: false, }, //Подземная
    barrier: { type: Boolean, required: true, default: false, }, //Шлагбаум
    garage: { type: Boolean, required: true, default: false, }, //Гараж
    security: { type: Boolean, required: true, default: false, }, //Охраняемая
  },
  the_landscaping_of_the_yard: { //Благоустройство двора
    comment: { type: String, },
    childrens_playground: { type: Boolean, required: true, default: false, },
    sports_ground: { type: Boolean, required: true, default: false, },
  },
  infrastructure: { //Инфраструктура двора
    comment: { type: String, },
    school: { type: Boolean, required: true, default: false, },
    fitness: { type: Boolean, required: true, default: false, },
    park: { type: Boolean, required: true, default: false, },
    kindergarten: { type: Boolean, required: true, default: false, },
    mall: { type: Boolean, required: true, default: false, },
  },
  bathroom: { //Санузел
    comment: { type: String, },
    value: {
      type: String,
      required: true,
      enum: ['Совмещенный', 'Раздельный', 'Более одного',],
    },
  },
  balcony: { //Количество балконов/лоджий
    comment: { type: String, },
    value: {
      type: String,
      required: true,
      enum: ['1', '2', '3+', 'Нет'],
    },
  },
  repair: { //Ремонт
    comment: { type: String, },
    value: {
      type: String,
      required: true,
      enum: ['Косметический', 'Евро', 'Дизайнерский', 'Без ремонта'],
    },
    replanning: { type: Boolean, required: true, default: false, }
  },
  view_from_windows: { //Вид из окон
    comment: { type: String, },
    yard: { type: Boolean, required: true, default: false, },
    street: { type: Boolean, required: true, default: false, },
    park: { type: Boolean, required: true, default: false, },
    reservoir: { type: Boolean, required: true, default: false, },
    forest: { type: Boolean, required: true, default: false, },
  },
});

const houseSchema = new Schema({
  _id: false,
  comment: { type: String, },
  security: { type: String, },
  type: {
    type: String,
    required: true,
    enum: ['Кирпичный', 'Панельный', 'Монолитный', 'Деревянный', 'Блочный'],
  },
  elevator: { //Количество лифтов
    value: {
      type: String,
      required: true,
      enum: ['1', '2', '3+'],
    },
    freight_elevator: { type: Boolean, required: true, default: false, },
  },
  apartment_number: { type: Number, },//сделать проверку
  cadastral_number: { type: Number, },//сделать проверку
  foto: { //Фото
    comment: { type: String, },
    value: { type: [String], },
  },
  video: { //Видеопросмотр
    comment: { type: String, },
    value: { type: [String], },
  },
});

const flatSchema = new Schema({
  _id: false,
  comment: { type: String, },
  rooms: {
    type: String,
    required: true,
    enum: ['1', '2', '3', '4', '5+', 'Студия'],
  },
  freight_elevator: { type: Boolean, required: true, default: false, },
  square: { type: Number, required: true, },
  square_kitchen: { type: Number, required: true, },
  square_residential: { type: Number, required: true, },
  floor: { type: Number, required: true, },
  floors_in_the_house: { type: Number, required: true, },
  ceiling_height: { type: Number, required: true, }, //Высота потолков
});

const dataSchema = new Schema({
  owner: { type: String, required: true, }, //ФИО
  documents: [String], //Массив путей к фото документов
  cadastral_value: { //Оценочкая стоимость
    value: { type: Number, required: true, },
    comment: { type: String, },
  },
  address: { //Адрес объект
    value: { type: String, required: true, },
    comment: { type: String, },
  },
  deal: dealSchema, //Сделка
  terms_of_sale: terms_of_saleSchema, //Условия продажи
  additionally: additionallySchema, //Дополнительно
  house: houseSchema, //Дом
  flat: flatSchema, //Квартира
  updated: { type: Date, default: Date.now, required: true },
});

module.exports = mongoose.model('Flat', dataSchema, 'flats');
