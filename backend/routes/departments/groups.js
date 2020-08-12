const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')
const clearanceLevel = require('../../middlewares/clearanceLevel')
const validate = require('../../middlewares/modelValidate')
const AccessLevel = require('../../types/accessLevel')
const DepartmentModel = require('../../models/department')
const GroupModel = require('../../models/group')
const Errors = require('../../models/types/errors')

router
    .route('/')
    .all(validate.ID({ department: req.params.id }))
    .get(
        clearanceLevel.determine({ level: AccessLevel['DEPARTMENT CHIEF'], department: req.params.id }),
        asyncHandler(async (req, res) => {
            res.status(200).json({
                data: await GroupModel.find().where('_id').in(res.locals.access.groups).exec(),
                message: Errors.success.common.message,
                type: Errors.success.common.type,
            })
        })
    )

router
    .route('/:groupId')
    .all(validate.ID({ department: req.params.id }), validate.ID({ group: req.params.groupId }))
    .post(
        clearanceLevel.determine({ level: AccessLevel.DIRECTOR }),
        asyncHandler(async (req, res) => {
            res.status(200).json({
                data: await DepartmentModel.assignGroup(req.params.id, req.params.groupId),
                message: Errors.success.departmentUpdate.message,
                type: Errors.success.departmentUpdate.type,
            })
        })
    )
    .get(
        clearanceLevel.determine({ level: AccessLevel['DEPARTMENT CHIEF'], department: req.params.id }),
        asyncHandler(async (req, res) => {
            res.status(200).json({
                data: await GroupModel.findById(req.params.groupId),
                message: Errors.success.common.message,
                type: Errors.success.common.type,
            })
        })
    )
    .delete(
        clearanceLevel.determine({ level: AccessLevel.DIRECTOR }),
        asyncHandler(async (req, res) => {
            res.status(200).json({
                data: await DepartmentModel.removeGroup(req.params.id, req.params.groupId),
                message: Errors.success.departmentUpdate.message,
                type: Errors.success.departmentUpdate.type,
            })
        })
    )

module.exports = router
