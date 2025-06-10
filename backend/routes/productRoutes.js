const express = require('express');
const router = express.Router();
const {
getAllProducts,
getLowStock,
createProduct,
} = require('../controllers/productController');
const auth = require('../middleware/authMiddleware');

router.get('/', getAllProducts);
router.get('/low-stock', getLowStock);
router.post('/', auth, createProduct);

module.exports = router;

