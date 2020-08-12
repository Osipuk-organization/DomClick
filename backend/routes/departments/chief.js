const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')
const clearanceLevel = require('../../middlewares/clearanceLevel')
const validate = require('../../middlewares/modelValidate')
const AccessLevel = require('../../types/accessLevel')
const DepartmentModel = require('../../models/department')
const UserModel = require('../../models/user')
const Errors = require('../../models/types/errors')

router
    .route('/')
    .all(validate.ID({ department: req.params.id }))
    .post(
        clearanceLevel.determine({ level: AccessLevel.DIRECTOR }),
        asyncHandler(async (req, res) => {
            const { chiefId } = req.body
            const { id } = req.params
            res.status(200).json({
                data: await DepartmentModel.assignChief(id, chiefId),
                message: Errors.success.departmentUpdate.message,
                type: Errors.success.departmentUpdate.type,
            })
        })
    )
    .get(
        clearanceLevel.determine({ level: AccessLevel['DEPARTMENT CHIEF'], department: req.params.id }),
        asyncHandler(async (req, res) => {
            const { id } = req.params
            const chiefId = (await DepartmentModel.findById(id)).chief
            res.status(200).json({
                data: await UserModel.findById(chiefId),
                message: Errors.success.common.message,
                type: Errors.success.common.type,
            })
        })
    )
    .delete(
        clearanceLevel.determine({ level: AccessLevel.DIRECTOR }),
        asyncHandler(async (req, res) => {
            res.status(200).json({
                data: await DepartmentModel.fireChief(req.params.id),
                message: Errors.success.departmentUpdate.message,
                type: Errors.success.departmentUpdate.type,
            })
        })
    )

module.exports = router
