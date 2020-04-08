const Product = require('../models/product');

module.exports.getProducts = function(req, res){
    console.log('getProducts called');
    console.log(req.body);
    Product.find({}, function(err, products){
        if(err){
            console.log(err);
        }
        else{
            console.log(products);
        }
    })
}

module.exports.createProduct = function(req, res){
    console.log('createProduct called');
    Product.create({
        id: 1,
        name: 'laptops',
        quantity: 10 
    }, function(err, newProduct){
        if(err){
            console.log('err in creating product: ', err);
            return;
        }
        else{
            console.log('newProduct:', newProduct);
        }
    });
}

module.exports.deleteProduct = function(req, res){
    console.log('deleteProduct called');
    return res.status(400);
}

module.exports.updateProduct = function(req, res){
    console.log('updateProduct called');
    return res.status(400);
}