const router = require('../../../express-crud-router/student_examples/fruits/controllers/fruits');
const mongoose = require('../db/connection')
const Beverage = require('../models/data-set.js');
const BestEverything = require('../models/data-set.js');
const Penpal = require('../models/data-set.js');

const db = mongoose.connection

const index = () => {
    Beverage.get('/person', (req, res) =>{
        
    })
}