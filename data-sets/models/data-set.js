const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const beverageSchema = new Schema(
    {
        Name: String,
        brand: String,
        Type: String,
        containsSugar: Boolean,
        carbonated: Boolean,
        container: String
    }
)

const Beverage = mongoose.model('Beverage', beverageSchema)

const bestSchema = new Schema( 
    {
        year: Number,
        sports: {
            superBowl: String,
            worldSeries: String,
            stanleyCup: String,
            NBAchampionship: String
        },
        music: {
            bestSong: {
                title: String,
                artist: String
            }
        },
        movies: {
            bestMovie: String,
            bestActress: String,
            bestActor: String
        }
    }
)

const BestEverything = mongoose.model('BestEverything', bestSchema)

const penpalSchema = new Schema (
    {
        to: String,
        from: String,
        message: String,
        sentOn: {
            timestamps: true
        }
    }
)

const Penpal = mongoose.model('Penpal', penpalSchema)

module.exports = Beverage, BestEverything, Penpal


