const mongoose = require('mongoose')

// build own scheam 
const schemaComapny = new mongoose.Schema({
    aze : {
        type: String,
        required: true
    }
})



module.exports = mongoose.model("Data", schemaComapny)