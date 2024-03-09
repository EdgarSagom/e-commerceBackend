const express = require('express')
const router = express.Router()
const { createProduct, getProduct, getAllProducts, updateProduct, deleteProduct } = require('../controllers/productsController')
const { protect, isAdmin } = require('../middleware/authMiddleware')

router.post('/', protect, isAdmin, createProduct)
router.get('/:id', getProduct)
router.put('/:id', protect, isAdmin, updateProduct)
router.delete('/:id', protect, isAdmin, deleteProduct)
router.get('/', getAllProducts)

module.exports = router