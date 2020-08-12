const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')
const clearanceLevel = require('../../middlewares/clearanceLevel')
const validate = require('../../middlewares/modelValidate')
const AccessLevel = require('../../types/accessLevel')
const FlatModel = require('../../models/flat')
const Errors = require('../../models/types/errors')

router.route('/:id').get(
    validate.ID({ group: req.params.id }),
    clearanceLevel.determine({ level: AccessLevel['GROUP CHIEF'], group: req.params.id }),
    asyncHandler(async (req, res) => {
        res.status(200).json({
            data: await FlatModel.find().where('employee').in(res.locals.access.employees).exec(),
            ...Errors.success.common,
        })
    })
)

module.exports = router
