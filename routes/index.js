const express = require('express');
const router = express.Router();
let productController = require('../controllers/product_controller');

router.get('/products', productController.getProducts);
router.post('/products/create', productController.createProduct);
router.get('/products/delete', productController.deleteProduct);
router.post('/products/update_quantity', productController.updateProduct);

module.exports = router;