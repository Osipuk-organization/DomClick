const express = require('express');
const router = express.Router();

const Flats = require("../models/flat");

router.get('/', async (req, res) => {
    flats = await Flats.find();
    res.status(200).json(flats);
});

router.get('/:id', async (req, res) => {
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
        const flat = await Flats.findById(req.params.id);
        res.status(200).json(flat);
    }
});

router.post('/add', async (req, res) => {
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
});

router.post('/delete', async (req, res) => {
    //delete one or many flats
    await Flats.deleteMany({ _id: { $in: req.body.checkBoxFlat } },
        (err, item) => {
            if (err) {
                res.status(204).send({ 'error': 'An error has occurred' });
            } else {
                res.redirect('/admin/main');
            }
        }
    );
})

router.post('/:id', async (req, res) => {
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
});


module.exports = router;