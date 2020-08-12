const express = require('express')
const router = express.Router()

router.route('/').get(
    asyncHandler(async (req, res) => {
        res.json({
            id: req.user.id,
        })
    })
)

module.exports = router
