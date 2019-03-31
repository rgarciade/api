const DB_Products = class {
    static listAll() {
        return [
            {
                "id": 2,
                "name": "car",
                "description": "examplec car description"
            }, {
                "id": 23,
                "name": "coffee",
                "description": "examplec coffee description"
            },
        ]
    }
    static getFromId(id) {
        return {
            "id": 2,
            "name": "car",
            "description": "examplec car description"
        }
    }
    static addNewProduct({ name, description }) {
        console.log(name, description)
        return {
            "id": 3,
            "name": name,
            "description": description
        }
    }
}
module.exports = DB_Products