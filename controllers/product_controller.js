const Product = require('../models/product');

module.exports.getProducts = function(req, res){
    console.log('getProducts called');
    Product.find({}, '-_id', function(err, products){
        if(err){
            console.log(err);
        }
        else{
            console.log(products);
            return res.status(200).json({
                data:{
                    products
                }
            })
        }
    })
}

module.exports.createProduct = function(req, res){
    console.log('createProduct called');
    console.log(req.body);
    Product.create({
        id: req.body.id,
        name: req.body.name,
        quantity: req.body.qty
    }, function(err, newProduct){
        if(err){
            console.log('err in creating product: ', err);
            return;
        }
        else{
            console.log('newProduct:', newProduct);
            return res.status(200).json({
                data:{
                    product:{
                        name: req.body.name,
                        quantity: req.body.qty
                    }
                }
            })
        }
    });
}

module.exports.deleteProduct = function(req, res){
    let param = req.params;
    console.log(param);
    let id = req.params.id;

    Product.deleteOne({ id: id }, function (err) {
        if(err){
            console.log(err);
            
        } 
        else{
            console.log("Successful deletion");
            return res.status(200).json({
                message: 'products deleted'
            })
        }
        
      });

    console.log('deleteProduct called');
    
}

module.exports.updateProduct = async function(req, res){

    let param = req.params;
    console.log(param);
    let searchId = param.id;
    
    let queryParams = req.query;
    let newQty = queryParams.number;
    console.log(queryParams);
    
    try{
        let product = await Product.findOne({id: searchId},'-_id');
        if(product){
            product.quantity = newQty;
            product.save();
            return res.status(200).json({
                data:{ 
                    product
                },
                message: 'updated successfully' 
            });
        }
        else{
            return res.status(404).json({
                message: 'not found'
            })
        }
    }
    catch(err){
        console.log('error');
    }
}