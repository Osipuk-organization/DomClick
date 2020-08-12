const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')
const clearanceLevel = require('../../middlewares/clearanceLevel')
const validate = require('../../middlewares/modelValidate')
const AccessLevel = require('../../types/accessLevel')
const FlatModel = require('../../models/flat')
const Errors = require('../../models/types/errors')

const employeeRouter = require('./employee.js')
const groupRouter = require('./group.js')
const departmentRouter = require('./department.js')

const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        const filename = `${file.fieldname}--${new Date().toLocaleDateString()}--${new Date().toLocaleTimeString().replace(/:/g, '-')}--${
            file.originalname
        }`
        cb(null, filename)
    },
})
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 3,
    },
    // fileFilter: fileFilter
}).fields([
    {
        name: 'filedata',
        maxCount: 4,
    },
])

router.use('/employee', employeeRouter)
router.use('/group', groupRouter)
router.use('/department', departmentRouter)

router
    .route('/')
    .post(
        clearanceLevel.determine({
            level: AccessLevel.VISITOR,
        }),
        asyncHandler(async (req, res) => {
            const foto = []
            //Code below should be taken to middleware
            upload(req, res, (err) => {
                if (err) {
                    if (err instanceof multer.MulterError) throw Errors.multerError(err)
                    else throw Errors.commonError
                }
                const files = req.files.filedata
                if (!files) throw Errors.fileError.noFileSelected

                console.log('FLATS')
                console.log('1', req.files)
                console.log('2', req.body)
                files.forEach((p) =>
                    foto.push({
                        // name: p.originalname,
                        // filename: p.filename,
                        path: p.path,
                        // size: p.size
                    })
                )

                // res.send({
                //     status: true,
                //     message: 'Photos are uploaded.',
                //     data: data
                // });
            })
            const flat = new FlatModel(req.body)
            flat.house.foto.value = foto
            // Code below should be taken to handler
            await flat.save((err, item) => {
                if (err) {
                    let data = {}
                    for (let i in req.body) {
                        data[i] = `${typeof i} ${i}`
                    }
                    throw Errors.flatError(data, err)
                }
                res.status(201).send({
                    data: item,
                    message: Errors.success.flatCreate.message,
                    type: Errors.success.flatCreate.type,
                })
            })
        })
    )
    .get(
        clearanceLevel.determine({
            level: AccessLevel.VISITOR,
        }),
        asyncHandler(async (req, res) => {
            let { page = 1, limit = 10, ...filter } = req.query
            page = +page
            limit = +limit
            const flats = await FlatModel.find(filter)
                .skip(limit * (page - 1))
                .limit(limit)
            const count = flats.length
            const total = await FlatModel.find(filter).countDocuments()
            res.status(200).json({
                data: {
                    page,
                    total,
                    count,
                    flats,
                },
                message: Errors.success.common.message,
                type: Errors.success.common.type,
            })
        })
    )

router
    .route('/:id')
    .all(
        validate.ID({
            flat: req.params.id,
        }),
        asyncHandler(async (req, res, next) => {
            res.locals.flat = await FlatModel.findById(req.params.id)
            res.locals.employee = res.locals.flat.employee
            next()
        }),
        clearanceLevel.determine({
            level: AccessLevel.EMPLOYEE,
            employee: res.locals.employee,
        })
    )
    .get(
        asyncHandler(async (req, res) => {
            res.status(200).json({
                data: res.locals.flat,
                message: Errors.success.common.message,
                type: Errors.success.common.type,
            })
        })
    )
    .patch(
        asyncHandler(async (req, res) => {
            res.status(200).json({
                data: await FlatModel.findByIdAndUpdate(req.params.id, req.body, {
                    new: true,
                }),
                message: Errors.success.flatUpdate.message,
                type: Errors.success.flatUpdate.type,
            })
        })
    )
    .delete(
        asyncHandler(async (req, res) => {
            res.status(204).json({
                data: await FlatModel.findByIdAndDelete(req.params.id),
                message: Errors.success.flatDelete.message,
                type: Errors.success.flatDelete.type,
            })
        })
    )

module.exports = router
