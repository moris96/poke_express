const mongoose = require('mongoose')

// Schema for pokedex 
const pokeSchema = new mongoose.Schema({
    name: { type: String, require: true},
    type: { type: String, require: true},
    weakness: { type: String, require: true},
    isLegendary: Boolean
})

// make model 
const Poke = mongoose.model('Poke', pokeSchema)

// export model for app 
module.exports = Poke 