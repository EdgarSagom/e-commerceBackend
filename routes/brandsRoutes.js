const express = require('express')
const router = express.Router()
const { createBrand, updateBrand, deleteBrand, getBrand, getAllBrand } = require('../controllers/brandsController')
const { protect, isAdmin } = require('../middleware/authMiddleware')

router.post('/', protect, isAdmin, createBrand)
router.put('/:id', protect, isAdmin, updateBrand)
router.delete('/:id', protect, isAdmin, deleteBrand)
router.get('/:id', getBrand)
router.get('/', getAllBrand)

module.exports = router