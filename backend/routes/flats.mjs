// import express from "express";

// const app = express();
// const msg = "Hello World! ";

// app.get("/", function (req, res) {
//     console.log(msg);
//     res.send(msg);
// });

import express from 'express';
let router = express.Router();
import mongoose from 'mongoose';
// const Flats = require('../models/flat');
import Flats from '../models/flat.mjs';

router.get('/', async (req, res) => {
    //сделать пагинацию
    const flats = await Flats.find();
    res.status(200).json(flats);
});

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
    .all(async (req, res, next) => {
        // Проверка на права
        next();
    })
    .post(async (req, res) => {
        //new flat
        const flat = new Flats(req.body);
        const savedFlat = await flat.save(
            (err, item) => {
                if (err) {
                    let data = {}
                    for (let i in req.body) {
                        data[i] = typeof i
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
        // res.redirect('/admin/main');
        // res.status(200).res.json(savedFlat);
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
                        res.status(404).send({ 'error': 'нет конента' });
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

    .put(async (req, res) => {
        //update flat
        let body = {}
        for (let i in req.body) {
            body[i] = req.body[i]
        }
        const flat = await Flats.updateMany(
            { _id: req.params.id },
            {
                $set: {
                    ...body
                }
            },
            (err, item) => {
                if (err) {
                    res.status(204).send({ 'error': 'An error has occurred' });
                } else {
                    res.redirect('/admin/main');
                }
            }
        )
    })
    .patch(async (req, res) => {
        console.error('В разработке')
        res.status(204).send({ 'error': 'В разработке' });
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


// module.exports = router;
export default router;