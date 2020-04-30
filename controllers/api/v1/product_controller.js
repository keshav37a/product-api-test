const Product = require('../../../models/product');


//to get all products from the database
module.exports.getProducts = async function(req, res){
    try{
        let products = await Product.find({});
        if(products){
            return res.status(200).json({
                data: {
                    products:products
                },
                message: 'Successfully retrieved all productd'
            });
        }
    }
    catch(err){
        return res.status(500).json({
            message: `${err}`
        });
    }
}


//To create a new product
module.exports.createProduct = async function(req, res){
    try{
        //using body parameters to create an object
        let name = req.body.name;
        let quantity = req.body.quantity;
        let newProduct = await Product.create({name: name, quantity: quantity});
        let obj = {};
        obj.name = name;
        obj.quantity = quantity;
        if(newProduct){
            return res.status(200).json({
                data: {
                    product: obj
                },
                message: 'Successfully created new product'
            });
        }
    }
    catch(err){
        return res.status(500).json({
            message: `${err}`
        });
    }
}


//to delete a product from the database
module.exports.deleteProduct = async function(req, res){
    try{
        let id = req.params.id;
        let deletedProduct = await Product.findByIdAndDelete(id);
        if(deletedProduct){
            return res.status(200).json({
                message: 'products deleted'
            })
        }
    }
    catch(err){
        return res.status(500).json({
            message: `${err}`
        });
    }
}


//To update a product using both query and params
module.exports.updateProduct = async function(req, res){
    let searchId = req.params.id;
    let queryParams = req.query;
    let newQty = Number(queryParams.number);
    
    try{
        let product = await Product.findById(searchId);
        if(product){
            let qt = product.quantity;
            qt = qt + newQty;
            product.quantity = qt;
            await product.save();
            return res.status(200).json({
                data: {
                    product
                },
                message: 'product updated successfully' 
            });
        }
        else{
            return res.status(404).json({
                message: 'not found'
            })
        }
    }
    catch(err){
        return res.status(500).json({
            message: `${err}`
        });
    }
}