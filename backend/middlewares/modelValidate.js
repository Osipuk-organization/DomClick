const UserModel = require('../models/user')
const GroupModel = require('../models/group')
const DepartmentModel = require('../models/department')
const FlatModel = require('../models/flat')
const mongoose = require('mongoose')
const Errors = require('../models/types/errors')

const modelHandler = {
    department: DepartmentModel,
    group: GroupModel,
    employee: UserModel,
    flat: FlatModel,
}

const fieldHandler = {
    department: 'name',
    group: 'name',
    employee: 'login',
}

module.exports = {
    ID: function (record) {
        return async function (req, res, next) {
            const collection = Object.keys(record)[0]
            const id = Object.values(record)[0]
            if (!mongoose.Types.ObjectId.isValid(id)) throw Errors.validateError.incorrectId
            let doc = await modelHandler[collection].findById(id)
            if (!doc) throw Errors[collection + 'Errors'].notFoundError
            else next()
        }
    },
    duplicate: function (record) {
        return async function (req, res, next) {
            const collection = Object.keys(record)[0]
            const value = Object.values(record)[0]
            const field = fieldHandler[collection]
            let doc = await modelHandler[collection].find({ [field]: value })
            if (doc) throw Errors[collection + 'Errors'].duplicateError
            else next()
        }
    },
}
