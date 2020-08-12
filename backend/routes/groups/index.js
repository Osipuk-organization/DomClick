const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')
const clearanceLevel = require('../../middlewares/clearanceLevel')
const validate = require('../../middlewares/modelValidate')
const AccessLevel = require('../../types/accessLevel')
const GroupModel = require('../../models/group')
const DepartmentModel = require('../../models/department')
const Errors = require('../../models/types/errors')

const chiefRouter = require('./chief')
const employeesRouter = require('./employees')

router.use('/:id/chief', chiefRouter)
router.use('/:id/employees', employeesRouter)

router
    .route('/')
    .post(
        validate.duplicate({ group: req.body.name }),
        validate.ID({ department: req.body.department }),
        clearanceLevel.determine({
            level: AccessLevel.DIRECTOR,
        }),
        asyncHandler(async (req, res) => {
            const newGroup = await GroupModel.create({ ...req.body })
            await DepartmentModel.assignGroup(newGroup.department, newGroup.id)
            res.status(201).json({
                data: newGroup,
                message: Errors.success.groupCreate.message,
                type: Errors.success.groupCreate.type,
            })
        })
    )
    .get(
        clearanceLevel.determine({
            level: AccessLevel.DIRECTOR,
        }),
        asyncHandler(async (req, res) => {
            res.status(200).json({
                data: await GroupModel.find(),
                message: Errors.success.common.message,
                type: Errors.success.common.type,
            })
        })
    )

router
    .route('/:id')
    .all(
        validate.ID({
            group: req.params.id,
        })
    )
    .get(
        clearanceLevel.determine({
            level: AccessLevel['DEPARTMENT CHIEF'],
            group: req.params.id,
        }),
        asyncHandler(async (req, res) => {
            res.status(200).json({
                data: await GroupModel.findById(req.params.id),
                message: Errors.success.common.message,
                type: Errors.success.common.type,
            })
        })
    )
    .patch(
        clearanceLevel.determine({
            level: AccessLevel['DEPARTMENT CHIEF'],
            group: req.params.id,
        }),
        asyncHandler(async (req, res) => {
            const { id } = req.params
            res.status(200).json({
                data: await GroupModel.updateDepartment({ id, ...req.body }),
                message: Errors.success.groupUpdate.message,
                type: Errors.success.groupUpdate.type,
            })
        })
    )
    .delete(
        clearanceLevel.determine({
            level: AccessLevel.DIRECTOR,
        }),
        asyncHandler(async (req, res) => {
            res.status(204).json({
                data: await GroupModel.findByIdAndDelete(req.params.id),
                message: Errors.success.groupDelete.message,
                type: Errors.success.groupDelete.type,
            })
        })
    )

module.exports = router
