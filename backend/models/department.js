const mongoose = require('mongoose')
const Schema = mongoose.Schema
const GroupModel = require('./group')
const Errors = require('./types/errors')

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
        required: false,
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

departmentSchema.statics.updateDepartment = async function (department) {
    delete department.chief
    delete department.groups
    return await this.findByIdAndUpdate(department._id, department, { new: true })
}

departmentSchema.statics.assignChief = async function (departmentId, chiefId) {
    return await this.findByIdAndUpdate(departmentId, { chief: mongoose.Schema.Types.ObjectId(chiefId) }, { new: true })
}

departmentSchema.statics.fireChief = async function (departmentId) {
    return await this.findByIdAndUpdate(departmentId, { chief: null }, { new: true })
}

departmentSchema.statics.assignGroup = async function (departmentId, groupId) {
    //remove from old department
    const filter = { groups: mongoose.Schema.Types.ObjectId(groupId) }
    const pull = { $pull: { groups: mongoose.Schema.Types.ObjectId(groupId) } }
    await this.findOneAndUpdate(filter, pull, { new: true })

    const push = { $push: { groups: mongoose.Schema.Types.ObjectId(groupId) } }
    const groupNewDepartment = await this.findByIdAndUpdate(departmentId, push, { new: true })

    await GroupModel.findByIdAndUpdate(groupId, { department: mongoose.Schema.Types.ObjectId(departmentId) }, { new: true })
    return groupNewDepartment
}

departmentSchema.statics.removeGroup = async function (departmentId, groupId) {
    const department = await this.findById(departmentId)
    if (!department.groups.find((group) => group == groupId)) {
        throw Errors.groupError.notFoundError
    }
    const update = { $pull: { groups: groupId } }
    const updDepartment = await this.findByIdAndUpdate(departmentId, update, { new: true })
    await GroupModel.findByIdAndUpdate(groupId, { department: null }, { new: true })
    return updDepartment
}

departmentSchema.post('findOne', ErrorHandler.ErrorHandler)
departmentSchema.post('findOneAndUpdate', ErrorHandler.ErrorHandler)
departmentSchema.post('save', ErrorHandler.ErrorHandler)

module.exports = mongoose.model('Department', departmentSchema)
