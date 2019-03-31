const DB_Products = require('./DB');
const listAll = (req, res) => {
    try {
        DB_Products.listAll().then((productsDatas) => {
            res.status(200).send({ 'status': 'ok', 'data': productsDatas })
        }).catch(err => {
            res.status(404).send({ 'status': 'ko', message: err })
        })

    } catch (error) {
        console.error(error)
        res.status(404).send({ 'status': 'ko', message: 'products error' })
    }
}
const findProduct = (req, res) => {
    try {
        DB_Products.findProduct(req.params.id).then(data => {
            res.status(200).send({ 'status': 'ok', data })
        }).catch(err => {
            console.error(err)
            res.status(404).send({ 'status': 'ko', message: `error to find ${req.params.id}` })
        })

    } catch (error) {
        console.error(error)
        res.status(404).send({ 'status': 'ko', message: 'products error' })
    }

}
const deleteProduct = (req, res) => {
    try {
        DB_Products.deleteProduct(req.params.id).then(data => {
            res.status(200).send({ 'status': 'ok', data })
        }).catch(err => {
            console.error(err)
            res.status(404).send({ 'status': 'ko', message: `error to delete ${req.params.id}` })
        })

    } catch (error) {
        console.error(error)
        res.status(404).send({ 'status': 'ko', message: 'products error' })
    }

}
const addNewProduct = (req, res) => {
    try {
        DB_Products.addNewProduct(req.body)
            .then(product => {
                res.status(200).send({ 'status': 'ok', ...product })
            }).catch(err => {
                res.status(404).send({ 'status': 'ko', message: err })
            })
    } catch (error) {
        console.error(error)
        res.status(404).send({ 'status': 'ko', message: 'products error' })
    }
}

module.exports = {
    listAll,
    findProduct,
    deleteProduct,
    addNewProduct
}