const express = require('express')
const bodyParser = require('body-parser')
const Constants = require('./constants')
const productsRoutes = require('./services/products/routes')
const port = Constants.App.port
//const auth = require('./middelwares/authentificate')
const app = express()

//statics
//app.use(express.static('public'));
//middlewarw
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
//routes
app.use('/api/products', productsRoutes)
app.listen(port, () => {
    console.log('servidor corriendo en puerto:' + port)
})
