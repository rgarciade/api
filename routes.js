const app = require('./app')
//cargar rutas
const products = require('./controlers/products')
/*
app.get('/api/products', auth.ensureAuth, products.listAll)
app.get('/api/products/:id', auth.ensureAuth, products.getFromId)
*/
app.get('/api/products', products.listAll)
app.get('/api/products/:id', products.getFromId)
app.get('*', (req, res) => {
    res.status(404).send({ msg: 'route error' })
})
//exports
module.exports = app