const express = require('express')
const router = express.Router()
const { createUser, loginUser, getAllUsers, getUser, deleteUser, updateUser, blockUser, unblockUser, blockedUser, unblockedUser } = require('../controllers/usersController')
const { protect, isAdmin } = require('../middleware/authMiddleware')

router.post('/register', createUser)
router.post('/login', loginUser)
router.get('/all', getAllUsers)
router.get('/:id', protect, isAdmin, getUser)
router.delete('/:id', deleteUser)
router.put('/update/:id', protect, updateUser)
router.put('/blocked/:id', protect, isAdmin, blockedUser)
router.put('/unblocked/:id', protect, isAdmin, unblockedUser)

module.exports = router