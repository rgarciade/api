const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const Constants = require('./constants')
const productsRoutes = require('./services/products/routes')
const port = Constants.App.port
const app = express()

//middlewarw
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
    //routes
app.use('/api/products', productsRoutes)

mongoose.Promise = global.Promise;
mongoose.connect(Constants.Database.route, { useNewUrlParser: true })
    .then(() => {
        console.log("connect okk")
        app.listen(port, () => {
            console.log('servidor corriendo en puerto:' + port)
        })

    })
    .catch(() => {
        console.log('error en la conexion, ejecute nodemond')
    })