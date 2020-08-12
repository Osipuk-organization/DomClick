const router = require('express').Router()
const authRouter = require('./auth')
const departmentsRouter = require('./departments')
const groupsRouter = require('./groups')
const employeesRouter = require('./employees')
const flatsRouter = require('./flats')
const verifyRouter = require('./verify.js')
const flatRouter = require('./flats.js') // to be deprecated
const usersRouter = require('./users.js') // to be deprecated
const errorMiddleware = require('../middlewares/error')
const authenticateMiddleware = require('../middlewares/authentication')

router.use('/auth', authRouter)
router.use('/flats', flatRouter) // to be deprecated
router.use(authenticateMiddleware)
router.use('/departments', departmentsRouter)
router.use('/groups', groupsRouter)
router.use('/employees', employeesRouter)
router.use('/flats_new/', flatsRouter)
router.use('/verify', verifyRouter)
router.use('/users', usersRouter) // to be deprecated
router.use(errorMiddleware)
router.get('*', function (req, res) {
    res.status(404).json({ error: 404 })
})

module.exports = router
