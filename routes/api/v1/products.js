const express = require('express');
const router = express.Router();
let productController = require('../../../controllers/api/v1/product_controller');

//To get all products
router.get('/', productController.getProducts);

//To create a new product
router.post('/create', productController.createProduct);

//To delete a product with the id
router.delete('/:id', productController.deleteProduct);

//To update a product with a specific quantity
router.post('/:id/update_quantity', productController.updateProduct);

module.exports = router;