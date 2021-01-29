const mongoose = require('../db/connection')
const Beverage = require('../models/data-set.js');
const BestEverything = require('../models/data-set.js');
const Penpal = require('../models/data-set.js');

const db = mongoose.connection

const create = () => {
    Beverage.post('/person', (req, res) =>{
        Beverage.push(req.body)
        res.json({
            Beverage : Beverage
        })
    })
}

// create()