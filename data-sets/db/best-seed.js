const mongoose = require('./connection')
const BestEverything = require('../models/data-set.js')
const db = mongoose.connection

const manyBests = require('../prompt3/best-everything.json')

BestEverything.insertMany(manyBests).then((bests) => {
    db.close()
})