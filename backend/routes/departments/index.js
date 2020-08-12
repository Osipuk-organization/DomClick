const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')
const clearanceLevel = require('../../middlewares/clearanceLevel')
const validate = require('../../middlewares/modelValidate')
const AccessLevel = require('../../types/accessLevel')
const DepartmentModel = require('../../models/department')
const Errors = require('../../models/types/errors')

const chiefRouter = require('./chief')
const groupsRouter = require('./groups')

router.use('/:id/chief', chiefRouter)
router.use('/:id/groups', groupsRouter)

router
    .route('/')
    .post(
        validate.duplicate({ department: req.body.name }),
        clearanceLevel.determine({
            level: AccessLevel.DIRECTOR,
        }),
        asyncHandler(async (req, res) => {
            res.status(201).json({
                data: await DepartmentModel.create({ ...req.body }),
                message: Errors.success.departmentCreate.message,
                type: Errors.success.departmentCreate.type,
            })
        })
    )
    .get(
        clearanceLevel.determine({
            level: AccessLevel.DIRECTOR,
        }),
        asyncHandler(async (req, res) => {
            res.status(200).json({
                data: await DepartmentModel.find(),
                message: Errors.success.common.message,
                type: Errors.success.common.type,
            })
        })
    )

router
    .route('/:id')
    .all(
        validate.ID({
            department: req.params.id,
        })
    )
    .get(
        clearanceLevel.determine({
            level: AccessLevel['DEPARTMENT CHIEF'],
            department: req.params.id,
        }),
        asyncHandler(async (req, res) => {
            res.status(200).json({
                data: await DepartmentModel.findById(req.params.id),
                message: Errors.success.common.message,
                type: Errors.success.common.type,
            })
        })
    )
    .patch(
        clearanceLevel.determine({
            level: AccessLevel['DEPARTMENT CHIEF'],
            department: req.params.id,
        }),
        asyncHandler(async (req, res) => {
            const { id } = req.params
            res.status(200).json({
                data: await DepartmentModel.updateDepartment({ id, ...req.body }),
                message: Errors.success.departmentUpdate.message,
                type: Errors.success.departmentUpdate.type,
            })
        })
    )
    .delete(
        clearanceLevel.determine({
            level: AccessLevel.DIRECTOR,
        }),
        asyncHandler(async (req, res) => {
            res.status(204).json({
                data: await DepartmentModel.findByIdAndDelete(req.params.id),
                message: Errors.success.departmentDelete.message,
                type: Errors.success.departmentDelete.type,
            })
        })
    )

module.exports = router
