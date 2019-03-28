const mongoose = require('mongoose')
const app = require('./routes');
const Constants = require('./constants')
const port = Constants.App.port
app.listen(port, () => {
    console.log('servidor corriendo en puerto:' + port)
})

