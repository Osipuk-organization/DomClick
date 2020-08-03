const mongoose = require('mongoose')
const Schema = mongoose.Schema

const departmentSchema = new Schema({
  name: {
    type: String,
    required: true,
    description: 'Название департамента',
  },
  description: {
    type: String,
    required: false,
    description: 'Описание департамента',
  },
  chief: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    description: 'Руководитель департамента',
  },
  groups: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Group',
      required: false,
      description: 'Группы, входящие в департамент',
    },
  ],
})

departmentSchema.post('findOne', ErrorHandler.ErrorHandler)
departmentSchema.post('findOneAndUpdate', ErrorHandler.ErrorHandler)
departmentSchema.post('save', ErrorHandler.ErrorHandler)

module.exports = mongoose.model('Department', departmentSchema)
