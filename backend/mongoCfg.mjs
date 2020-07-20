// const mongoose = require('mongoose');
import mongoose from 'mongoose'

const MONGO_HOST = '185.87.48.247';
const MONGO_PORT = '27017';
const MONGO_DB = 'DomClick';

const URL = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`;

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB has been started!')
    })
    .catch(() => {
        console.error('MongoDB is not start!')
    });