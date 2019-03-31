const Products = require('../model/products')
const DB_Products = class {
    static transformProductData(product) {
        return {
            id: product._id,
            name: product.name,
            description: product.description
        }
    }
    static listAll() {
        return new Promise((resolve, reject) => {
            let productToReturn = []
            Products.find({}, (err, ProductsDatas) => {
                if (err) reject(err)
                ProductsDatas.forEach(element => {
                    productToReturn.push(this.transformProductData(element))
                });
                resolve(productToReturn)
            })
        })
    }
    static findProduct(findData) {
        return new Promise((resolve, reject) => {
            let productToReturn = []
            Products.find({ _id: findData }, (err, ProductsDatas) => {
                if (err) reject(err)
                if (ProductsDatas && ProductsDatas.length > 0) {
                    ProductsDatas.forEach(element => {
                        productToReturn.push(this.transformProductData(element))
                    });
                }
                resolve(productToReturn)
            })
        })
    }
    static deleteProduct(findData) {
        return new Promise((resolve, reject) => {
            let productToReturn = []
            Products.deleteOne({ _id: findData }, (err, productDeleted) => {
                if (err) reject(err)
                console.log(productDeleted)
                if (productDeleted.ok && productDeleted.deletedCount > 0) {
                    resolve(`Product id:${findData} deleted`)
                }
                reject(`error to dilete id:${findData}`)
            })
        })
    }
    static async addNewProduct({ name, description }) {
        const Product = new Products({ name, description })
        return new Promise((resolve, reject) => {
            Product.save((err, productStore) => {
                if (err) {
                    console.error(err)
                    reject({ message: 'create product error' })
                }
                if (productStore) {
                    resolve({ data: { id: productStore._id }, message: 'product create' })
                }
                resolve({ message: 'create product error' })
            })
        })

    }
}
module.exports = DB_Products