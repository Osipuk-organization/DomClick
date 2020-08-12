
const router = require("express").Router();
const mongoose = require("mongoose");
const queryString = require('query-string');
const multer = require('multer')

const storage = require('../config/multer');


const authenticateMiddleware = require("../middlewares/authentication");
const Flats = require('../models/flat');

const upload = multer(
    {
        storage: storage,
        limits: { fileSize: 1024 * 1024 * 3 },
        // fileFilter: fileFilter 
    }
).fields([
    { name: 'foto', maxCount: 2 },
    { name: 'video', maxCount: 2 },
    { name: 'documents', maxCount: 2 },
])

router.route('/')
    .get(async (req, res) => {
        const query = queryString.parseUrl(req.url, {
            parseBooleans: true,
            parseNumbers: true,
            skipNull: true,
            skipEmptyString: true
        }).query
        const { page = 1, limit = 10, search, filter } = req.query;
        // filter get params
        let searchParse = {}
        if (Array.isArray(search)) {
            search.forEach(i => {
                if (!searchParse[Object.keys(JSON.parse(`{${i}}`))[0]]) {
                    searchParse[Object.keys(JSON.parse(`{${i}}`))[0]] = [Object.values(JSON.parse(`{${i}}`))[0]]
                } else {
                    searchParse[Object.keys(JSON.parse(`{${i}}`))[0]].push(Object.values(JSON.parse(`{${i}}`))[0])
                }
            })
            for (var prop in searchParse) {
                searchParse[prop].forEach(i => typeof i === 'string' && i[0] === '/' ? searchParse[prop] = new RegExp(i.toString().slice(1, -1)) : searchParse[prop] = i)
            }
        } else {
            searchParse = search ? JSON.parse(`{${search}}`, (k, v) => {
                return typeof v === 'string' && v[0] === '/' ? new RegExp(v.toString().slice(1, -1)) : v
            }) : null
        }

        const requestDB = [searchParse, filter ? JSON.parse(`{${filter}}`) : null]

        const flats = await Flats.find(...requestDB).skip(limit * (page - 1)).limit(limit);
        const count = flats.length;
        const total = await Flats.find(...requestDB).countDocuments();
        res.status(200).json({
            page,
            total,
            count,
            flats,
        });
    })
    .all(authenticateMiddleware, async (req, res, next) => {
        // Проверка на права
        next();
    })
    .post(upload, async (req, res) => {

        // upload(req, res, err => {
        //     if (err) return next(err)
        //     if (err instanceof multer.MulterError) {
        //         // Ошибка multer
        //         res.status(500).send(err);
        //         return
        //     } else if (err) {
        //         // При загрузке произошла неизвестная ошибка.
        //         res.status(500).send(err);
        //         return
        //     }
        // })

        const files = {}

        for (let name in req.files) {
            files[name] = []
            req.files[name].forEach(p => {
                files[name].push(p.path)
            });
        }

        const flat = new Flats(JSON.parse(req.body.json));
        flat.house.foto.value = files.foto;
        flat.house.video.value = files.video;
        flat.documents = files.documents;
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
                        res.status(200).send({ 'delete': item });
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