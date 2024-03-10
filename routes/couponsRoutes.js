const express = require('express')
const router = express.Router()
const { createCoupon, updateCoupon, deleteCoupon, getCoupon, getAllCoupons } = require('../controllers/couponsController')
const { protect, isAdmin } = require('../middleware/authMiddleware')

router.post('/', protect, isAdmin, createCoupon)
router.put('/:id', protect, isAdmin, updateCoupon)
router.delete('/:id', protect, isAdmin, deleteCoupon)
router.get('/:id', protect, isAdmin, getCoupon)
router.get('/', protect, isAdmin, getAllCoupons)

module.exports = router