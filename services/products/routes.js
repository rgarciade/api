const express = require('express')
const app = express.Router();
const products = require('./products')
/*
app.get('/api/products', auth.ensureAuth, products.listAll)
app.get('/api/products/:id', auth.ensureAuth, products.getFromId)
*/
app.get('/', products.listAll)
app.post('/', products.addNewProduct)
app.get('/:id', products.getFromId)


app.all('*', (req, res) => {
    console.log(req.body)
    res.status(404).send({ msg: req.body })
})
module.exports = app