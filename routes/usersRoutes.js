const express = require('express')
const router = express.Router()
const { createUser, loginUser, getAllUsers, getUser, deleteUser, updateUser, blockedUser, unblockedUser, handleRefreshToken, logout, loginAdmin, getWishlist, saveAddress, cartUser, getCartUser, emptyCart, applyCoupon, createOrder, updateOrderStatus, getOrders, getAllOrders } = require('../controllers/usersController')
const { protect, isAdmin } = require('../middleware/authMiddleware')

router.post('/register', createUser)
router.post('/login', loginUser)
router.post('/login-admin', loginAdmin)
router.post('/cart', protect, cartUser)
router.post('/cart/applycoupon', protect, applyCoupon)
router.post('/cart/cash-order', protect, createOrder)

router.get('/all', protect, isAdmin, getAllUsers)
router.get('/orders', protect, getOrders)
router.get('/allorders', protect, isAdmin, getAllOrders)
router.get('/refresh', handleRefreshToken)
router.get('/logout', logout)
router.get('/wishlist', protect, getWishlist)
router.get('/cart', protect, getCartUser)
router.get('/:id', protect, isAdmin, getUser)

router.delete('/empty-cart', protect, emptyCart)
router.delete('/:id', deleteUser)

router.put('/orders/update-order/:id', protect, isAdmin, updateOrderStatus)
router.put('/update/:id', protect, updateUser)
router.put('/save-address', protect, saveAddress)
router.put('/blocked/:id', protect, isAdmin, blockedUser)
router.put('/unblocked/:id', protect, isAdmin, unblockedUser)

module.exports = router