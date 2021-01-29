const mongoose = require('../db/connection')
const Beverage = require('../models/data-set.js');
const BestEverything = require('../models/data-set.js');
const Penpal = require('../models/data-set.js');

const db = mongoose.connection

const delete = () => {
    Beverage.delete('/person/:id', (req, res) =>{
        Beverage.splice(req.params.id, 1)
        res.json({
            id: req.params.id
        })
    })
}

// delete()