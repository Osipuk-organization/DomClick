const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UniqueValidator = require('mongoose-unique-validator')
const ErrorHandler = require('./handlers/errorHandler')
const EnumUserTypes = require('./types/enumUserTypes')
const userRoles = Object.values(EnumUserTypes)

const bcrypt = require('bcryptjs')

const userSchema = new Schema({
  login: {
    type: String,
    required: true,
    index: true,
    unique: true,
    description: 'Логин пользователя',
  },
  password: {
    type: String,
    required: true,
    description: 'Пароль пользователя',
  },
  role: {
    type: String,
    enum: userRoles,
    required: true,
    description: 'Полномочия пользователя',
  },
  surname: {
    type: String,
    required: false,
    description: 'Фамилия пользователя',
  },
  name: {
    type: String,
    required: false,
    description: 'Имя пользователя',
  },
  middleName: {
    type: String,
    required: false,
    description: 'Отчество пользователя',
  },
  phone: {
    type: String,
    required: false,
    description: 'Телефон пользователя',
  },
  email: {
    type: String,
    required: false,
    description: 'Электронная почта пользователя',
  },
})

userSchema.methods.comparePassword = function (candidate) {
  return bcrypt.compareSync(candidate, this.password)
}

userSchema.pre('save', function (next) {
  if (this.isModified('password')) {
    const salt = bcrypt.genSaltSync(+process.env.SALT_ROUNDS)
    this.password = bcrypt.hashSync(this.password, salt)
  }
  next()
})
userSchema.post('findOne', ErrorHandler.ErrorHandler)
userSchema.post('findOneAndUpdate', ErrorHandler.ErrorHandler)
userSchema.post('save', ErrorHandler.ErrorHandler)
userSchema.plugin(UniqueValidator)

module.exports = mongoose.model('User', userSchema)
