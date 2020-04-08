const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    id:{
        type: Number
    },
    name:{
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    }
}, { versionKey: false });

//set version_key to false to remove the  _v field from the database

const Product = mongoose.model('product', productSchema);
module.exports = Product;