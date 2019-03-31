const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NoteSchema = Schema({
    description: String,
    name: { type: String, required: true }
})
module.exports = mongoose.model('Products', NoteSchema)