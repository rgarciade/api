const express = require('express')
const bodyParser = require('body-parser')
//const auth = require('./middelwares/authentificate')
const app = express()

//statics
app.use(express.static('public'));
//middlewarw
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//exports
module.exports = app