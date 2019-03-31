const express = require('express')
const app = express.Router();
const products = require('./products')
    /*
    app.get('/api/products', auth.ensureAuth, products.listAll)
    app.get('/api/products/:id', auth.ensureAuth, products.getFromId)
    */
app.get('/', products.listAll)
app.get('/:id', products.findProduct)
app.delete('/:id', products.deleteProduct)
app.put('/', products.addNewProduct)


app.all('*', (req, res) => {
    res.status(404).send({ 'message': 'route not found' })
})
module.exports = app