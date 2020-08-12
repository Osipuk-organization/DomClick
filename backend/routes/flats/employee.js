const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')
const clearanceLevel = require('../../middlewares/clearanceLevel')
const validate = require('../../middlewares/modelValidate')
const AccessLevel = require('../../types/accessLevel')
const FlatModel = require('../../models/flat')
const Errors = require('../../models/types/errors')

router.route('/:id').get(
    validate.ID({ employee: req.params.id }),
    clearanceLevel.determine({ level: AccessLevel.EMPLOYEE, employee: req.params.id }),
    asyncHandler(async (req, res) => {
        res.status(200).json({
            data: await FlatModel.find({ employee: req.params.id }),
            ...Errors.success.common,
        })
    })
)

module.exports = router
