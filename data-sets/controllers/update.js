const mongoose = require('../db/connection')
const Beverage = require('../models/data-set.js');
const BestEverything = require('../models/data-set.js');
const Penpal = require('../models/data-set.js');

const db = mongoose.connection

const update = () => {
    Beverage.put('/person/:id', (req, res) =>{
        Beverage[req.params.id] = req.body
        res.json({
            route: 'put route'
        })
    })
}

// update()