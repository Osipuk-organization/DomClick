const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')
const clearanceLevel = require('../../middlewares/clearanceLevel')
const validate = require('../../middlewares/modelValidate')
const AccessLevel = require('../../types/accessLevel')
const DepartmentModel = require('../../models/department')
const GroupModel = require('../../models/group')
const UserModel = require('../../models/user')
const Errors = require('../../models/types/errors')

router
    .route('/')
    .all(validate.ID({ group: req.params.id }))
    .get(
        clearanceLevel.determine({
            level: AccessLevel['GROUP CHIEF'],
            group: req.params.id,
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
    .route('/:employeeId')
    .all(validate.ID({ group: req.params.id }), validate.ID({ employee: req.params.employeeId }))
    .post(
        clearanceLevel.determine({
            level: AccessLevel['DEPARTMENT CHIEF'],
            group: req.params.id,
        }),
        asyncHandler(async (req, res) => {
            res.status(200).json({
                data: await GroupModel.assignEmployee(req.params.id, req.params.employeeId),
                message: Errors.success.groupUpdate.message,
                type: Errors.success.groupUpdate.type,
            })
        })
    )
    .get(
        clearanceLevel.determine({
            level: AccessLevel['DEPARTMENT CHIEF'],
            group: req.params.id,
        }),
        asyncHandler(async (req, res) => {
            res.status(200).json({
                data: await UserModel.findById(req.params.employeeId),
                message: Errors.success.common.message,
                type: Errors.success.common.type,
            })
        })
    )
    .delete(
        clearanceLevel.determine({
            level: AccessLevel['DEPARTMENT CHIEF'],
            group: req.params.id,
        }),
        asyncHandler(async (req, res) => {
            res.status(200).json({
                data: await GroupModel.fireEmployee(req.params.id, req.params.employeeId),
                message: Errors.success.groupUpdate.message,
                type: Errors.success.groupUpdate.type,
            })
        })
    )

module.exports = router
