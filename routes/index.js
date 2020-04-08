const express = require('express');
const router = express.Router();
let productController = require('../controllers/product_controller');

//To get all products
router.get('/products', productController.getProducts);

//To create a new product
router.post('/products/create', productController.createProduct);

//To delete a product with the id
router.get('/products/delete/:id', productController.deleteProduct);

//To update a product with a specific quantity
router.post('/products/:id/update_quantity', productController.updateProduct);

module.exports = router;