const mongoose = require('./connection')
const Penpal = require('../models/data-set.js')
const db = mongoose.connection

const manyPenpals = require('../prompt2/penpals.json')

Penpal.insertMany(manyPenpals).then((penpals) => {
    db.close()
})