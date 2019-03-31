const express = require('express')
const app = express.Router();
const products = require('./products')
const { ensureAuth } = require('../../middleware/authentificate')

app.get('/', products.listAll)
app.get('/:id', products.findProduct)
app.delete('/:id', ensureAuth, products.deleteProduct)
app.put('/', ensureAuth, products.addNewProduct)

app.all('*', (req, res) => {
    res.status(404).send({ 'status': 'ko', 'message': 'route not found' })
})
module.exports = app