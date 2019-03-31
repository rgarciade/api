# api

An attachment is included [ponstmancollection](./api.postman_collection.json) 

# List of Endpoint
 **more detailed explanations in the [ponstmancollection](./api.postman_collection.json)**
 - ### authenticated
    - **PUT** {{serverip}}/api/products/productid
    - **DEL** {{serverip}}/api/products/productid 
 - ### not authenticated
    - **GET** {{serverip}}/api/products/    
    - **GET** {{serverip}}/api/products/productid
    
# future additions
  - Add unit tests
  - Creation of authenticated users
  - Authenticated users with jwt
### Installation
Requires [Node.js](https://nodejs.org/) v3.5.2+ to run.

Requires [mongo](https://docs.mongodb.com/manual/administration/install-community/) server runing in localhost:27017
Install and start the server.

```sh
$ npm install 
$ npm start
```