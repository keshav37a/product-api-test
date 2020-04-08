const express = require('express');
const router = express.Router();
let productController = require('../controllers/product_controller');

router.get('/products', productController.getProducts);

module.exports = router;
