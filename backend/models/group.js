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
        required: false,
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

groupSchema.statics.updateGroup = async function (group) {
    delete group.chief
    delete group.employees
    return await this.findByIdAndUpdate(group._id, group, { new: true })
}
groupSchema.statics.assignChief = async function (groupId, chiefId) {
    return await this.findByIdAndUpdate(groupId, { chief: mongoose.Schema.Types.ObjectId(chiefId) }, { new: true })
}

groupSchema.statics.fireChief = async function (groupId) {
    return await this.findByIdAndUpdate(groupId, { chief: null }, { new: true })
}

groupSchema.statics.assignEmployee = async function (groupId, employeeId) {
    //remove from old group
    const filter = { employees: mongoose.Schema.Types.ObjectId(employeeId) }
    const pull = { $pull: { employees: mongoose.Schema.Types.ObjectId(employeeId) } }
    await this.findOneAndUpdate(filter, pull, { new: true })
    //add to new group
    const push = { $push: { employees: mongoose.Schema.Types.ObjectId(employeeId) } }
    const employeeNewGroup = await this.findByIdAndUpdate(groupId, push, { new: true })

    return employeeNewGroup
}

groupSchema.statics.fireEmployee = async function (groupId, employeeId) {
    const group = await this.findById(groupId)
    if (!group.employees.find((employee) => employee == employeeId)) {
        throw Errors.groupError.notFoundError
    }
    const update = { $pull: { employees: employeeId } }
    const updGroup = await this.findByIdAndUpdate(groupId, update, { new: true })

    return updGroup
}

groupSchema.post('findOne', ErrorHandler.ErrorHandler)
groupSchema.post('findOneAndUpdate', ErrorHandler.ErrorHandler)
groupSchema.post('save', ErrorHandler.ErrorHandler)

module.exports = mongoose.model('Group', groupSchema)
