const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')
const clearanceLevel = require('../../middlewares/clearanceLevel')
const validate = require('../../middlewares/modelValidate')
const AccessLevel = require('../../types/accessLevel')
const UserModel = require('../../models/user')
const Errors = require('../../models/types/errors')

router
    .route('/')
    .post(
        validate.duplicate({ employee: req.body.login }),
        clearanceLevel.determine({
            level: AccessLevel.DIRECTOR,
        }),
        asyncHandler(async (req, res) => {
            res.status(201).json({
                data: await UserModel.create({ ...req.body }),
                message: Errors.success.employeeCreate.message,
                type: Errors.success.employeeCreate.type,
            })
        })
    )
    .get(
        clearanceLevel.determine({
            level: AccessLevel.EMPLOYEE,
        }),
        asyncHandler(async (req, res) => {
            res.status(200).json({
                data: await UserModel.find().where('_id').in(res.locals.access.employees).exec(),
                message: Errors.success.common.message,
                type: Errors.success.common.type,
            })
        })
    )

router
    .route('/:id')
    .all(
        validate.ID({
            employee: req.params.id,
        })
    )
    .get(
        clearanceLevel.determine({
            level: AccessLevel.EMPLOYEE,
            employee: req.params.id,
        }),
        asyncHandler(async (req, res) => {
            res.status(200).json({
                data: await UserModel.findById(req.params.id),
                message: Errors.success.common.message,
                type: Errors.success.common.type,
            })
        })
    )
    .patch(
        clearanceLevel.determine({
            level: AccessLevel.EMPLOYEE,
            employee: req.params.id,
        }),
        asyncHandler(async (req, res) => {
            const { id } = req.params
            const updatedUser = { ...req.body }
            // Only Admin can change user role!!!
            if (res.locals.access.level !== AccessLevel.ADMIN) {
                delete updatedUser.role
            }
            res.status(200).json({
                data: await UserModel.findByIdAndUpdate(id, updatedUser, { new: true }),
                message: Errors.success.employeeUpdate.message,
                type: Errors.success.employeeUpdate.type,
            })
        })
    )
    .delete(
        clearanceLevel.determine({
            level: AccessLevel.ADMIN,
        }),
        asyncHandler(async (req, res) => {
            res.status(204).json({
                data: await UserModel.findByIdAndDelete(req.params.id),
                message: Errors.success.employeeDelete.message,
                type: Errors.success.employeeDelete.type,
            })
        })
    )

module.exports = router
