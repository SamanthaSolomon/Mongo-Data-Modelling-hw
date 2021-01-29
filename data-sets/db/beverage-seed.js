const mongoose = require('./connection')
const Beverage = require('../models/data-set.js')
const db = mongoose.connection

const manyBevs = require('../prompt1/beverage-data.json')

Beverage.insertMany(manyBevs).then((beverages) => {
    console.log('beverages-', beverages)
    db.close()
})