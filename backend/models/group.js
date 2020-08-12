const mongoose = require('mongoose')
const Schema = mongoose.Schema

const groupSchema = new Schema({
  name: {
    type: String,
    required: true,
    description: 'Название группы',
  },
  description: {
    type: String,
    required: false,
    description: 'Описание группы',
  },
  department: {
    type: Schema.Types.ObjectId,
    ref: 'Department',
    required: true,
    description: 'Департамент группы',
  },
  chief: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    description: 'Руководитель группы',
  },
  employees: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: false,
      description: 'Менеджеры группы',
    },
  ],
})

groupSchema.post('findOne', ErrorHandler.ErrorHandler)
groupSchema.post('findOneAndUpdate', ErrorHandler.ErrorHandler)
groupSchema.post('save', ErrorHandler.ErrorHandler)

module.exports = mongoose.model('Group', groupSchema)
