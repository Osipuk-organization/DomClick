
const router = require("express").Router();
const mongoose = require("mongoose");
const authenticateMiddleware = require("../middlewares/authentication");
const Flats = require('../models/flat');


const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        const filename = `${file.fieldname}--${new Date().toLocaleDateString()}--${new Date().toLocaleTimeString().replace(/:/g, '-')}--${file.originalname}`;
        cb(null, filename)
    }
})
const upload = multer(
    {
        storage: storage,
        limits: { fileSize: 1024 * 1024 * 3 },
        // fileFilter: fileFilter 
    }
).fields([{
    name: 'filedata',
    maxCount: 4
}]);

router.route('/')
    .get(async (req, res) => {
        let { page = 1, limit = 10, ...filter } = req.query;
        page = +page;
        limit = +limit;
        const flats = await Flats.find(filter).skip(limit * (page - 1)).limit(limit);
        const count = flats.length;
        const total = await Flats.find(filter).countDocuments();
        res.status(200).json({
            page,
            total,
            count,
            flats,
        });
    })
    // .all(authenticateMiddleware, async (req, res, next) => {
    //     // Проверка на права
    //     next();
    // })
    .post(async (req, res) => {
        //new flat

        // req.files

        const foto = [];
        upload(req, res, (err) => {
            if (err instanceof multer.MulterError) {
                // Ошибка multer
                res.status(500).send(err);
                return
            } else if (err) {
                // При загрузке произошла неизвестная ошибка.
                res.status(500).send(err);
                return
            }
            const files = req.files.filedata;
            if (!files) {
                res.status(400).send({ data: 'No files is selected.' });
            } else {
                console.log('FLATS')
                console.log('1', req.files)
                console.log('2', req.body)

                files.forEach(p => foto.push({
                    // name: p.originalname,
                    // filename: p.filename,
                    path: p.path,
                    // size: p.size
                }));

                // res.send({
                //     status: true,
                //     message: 'Photos are uploaded.',
                //     data: data
                // });
            }
        })


        const flat = new Flats(req.body);
        flat.house.foto.value = foto;
        const savedFlat = await flat.save(
            (err, item) => {
                if (err) {
                    let data = {}
                    for (let i in req.body) {
                        data[i] = `${typeof i} ${i}`
                    }
                    res.status(400).send({
                        'error': 'Ошибка записи в бд',
                        'data': data,
                        'description': err,
                    });
                } else {
                    res.status(200).send(item);
                }
            })
    })

router.route('/:id')
    .get(async (req, res) => {
        //get one flat
        if (mongoose.Types.ObjectId.isValid(req.params.id)) {
            const flat = await Flats.findById(req.params.id);
            if (flat) {
                res.status(200).json(flat);
            } else {
                res.status(404).json({ "error": 404 });
            }
        } else {
            res.status(404).json({ "error": "ошибочный id" });
        }
    })
    .all(authenticateMiddleware, async (req, res, next) => {
        // Проверка на права
        next();
    })
    .put(async (req, res) => {
        //update flat
        let body = {}
        for (let i in req.body) {
            body[i] = req.body[i]
        }
        const flat = await Flats.updateMany(
            { _id: req.params.id },
            { $set: { ...body } },
            (err, item) => {
                if (err) res.status(204).send({ 'error': 'An error has occurred' });
                else res.redirect('/admin/main');
            }
        )
    })
    .patch(async (req, res) => {
        // console.error('В разработке')
        res.status(204).send({ 'error': 'В разработке' });
    })
    .delete(async (req, res) => {
        //delete one
        if (mongoose.Types.ObjectId.isValid(req.params.id)) {
            await Flats.deleteOne({ _id: req.params.id },
                (err, item) => {
                    if (err) {
                        res.status(204).send({ 'error': 'An error has occurred' });
                    }
                    if (item.deletedCount === 0) {
                        res.status(404).send({ 'error': 'нет контента' });
                    } else {
                        res.status(204).send({ 'delete': item });
                    }
                    // res.redirect('/admin/main');
                }

            );
        } else {
            res.status(404).json({ "error": "ошибочный id" });
        }
    })


router.route('/delete')
    .post(async (req, res) => {
        //delete one or many flats
        await Flats.deleteMany({ _id: { $in: req.body.checkBoxFlat } },
            (err, item) => {
                if (err) {
                    res.status(204).send({ 'error': 'An error has occurred' });
                }
                console.log('deleted', item)
                // res.redirect('/admin/main');
            }
        );
    })

module.exports = router;