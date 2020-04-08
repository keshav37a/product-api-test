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

const Product = mongoose.model('product', productSchema);
module.exports = Product;