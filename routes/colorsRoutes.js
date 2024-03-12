const express = require('express')
const router = express.Router()
const { createColor, updateColor, deleteColor, getColor, getAllColor } = require('../controllers/colorsController')
const { protect, isAdmin } = require('../middleware/authMiddleware')

router.post('/', protect, isAdmin, createColor)
router.put('/:id', protect, isAdmin, updateColor)
router.delete('/:id', protect, isAdmin, deleteColor)
router.get('/:id', getColor)
router.get('/', getAllColor)

module.exports = router