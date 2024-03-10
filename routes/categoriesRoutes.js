const express = require('express')
const router = express.Router()
const { createCategory, updateCategory, deleteCategory, getCategory, getAllCategory } = require('../controllers/categoriesController')
const { protect, isAdmin } = require('../middleware/authMiddleware')

router.post('/', protect, isAdmin, createCategory)
router.put('/:id', protect, isAdmin, updateCategory)
router.delete('/:id', protect, isAdmin, deleteCategory)
router.get('/:id', getCategory)
router.get('/', getAllCategory)

module.exports = router