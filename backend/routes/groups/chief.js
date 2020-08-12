const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')
const clearanceLevel = require('../../middlewares/clearanceLevel')
const validate = require('../../middlewares/modelValidate')
const AccessLevel = require('../../types/accessLevel')
const GroupModel = require('../../models/group')
const UserModel = require('../../models/user')
const Errors = require('../../models/types/errors')

router
    .route('/')
    .all(validate.ID({ group: req.params.id }))
    .post(
        clearanceLevel.determine({
            level: AccessLevel['DEPARTMENT CHIEF'],
            group: req.params.id,
        }),
        asyncHandler(async (req, res) => {
            res.status(200).json({
                data: await GroupModel.assignChief(req.params.id, req.body.chiefId),
                message: Errors.success.groupUpdate.message,
                type: Errors.success.groupUpdate.type,
            })
        })
    )
    .get(
        clearanceLevel.determine({ level: AccessLevel['GROUP CHIEF'], group: req.params.id }),
        asyncHandler(async (req, res) => {
            const chiefId = (await GroupModel.findById(req.params.id)).chief
            res.status(200).json({
                data: await UserModel.findById(chiefId),
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
                data: await GroupModel.fireChief(req.params.id),
                message: Errors.success.groupUpdate.message,
                type: Errors.success.groupUpdate.type,
            })
        })
    )

module.exports = router
