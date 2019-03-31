const DB_Products = require('../../DB/products');
const listAll = (req, res) => {
    try {
        const products = DB_Products.listAll()
        res.status(200).send({ 'status': 'ok', 'data': products })
    } catch (error) {
        console.error(error)
        res.status(404).send({ message: 'products error' })
    }
}
const getFromId = (req, res) => {
    try {
        const product = DB_Products.getFromId(req.body.id)
        res.status(200).send({ 'status': 'ok', 'data': product })
    } catch (error) {
        console.error(error)
        res.status(404).send({ message: 'products error' })
    }

}
const addNewProduct = (req, res) => {
    try {
        const product = DB_Products.addNewProduct(req.body)
        res.status(200).send({ 'status': 'ok', 'data': product })
    } catch (error) {
        console.error(error)
        res.status(404).send({ message: 'products error' })
    }
}

module.exports = {
    listAll,
    getFromId,
    addNewProduct
}