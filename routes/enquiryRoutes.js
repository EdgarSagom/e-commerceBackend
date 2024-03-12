const express = require('express')
const router = express.Router()
const { createEnquiry, updateEnquiry, deleteEnquiry, getEnquiry, getallEnquiry } = require('../controllers/enquiryController')
const { protect, isAdmin } = require('../middleware/authMiddleware')

router.post('/', createEnquiry)
router.put('/:id', protect, isAdmin, updateEnquiry)
router.delete('/:id', protect, isAdmin, deleteEnquiry)
router.get('/:id', getEnquiry)
router.get('/', getallEnquiry)

module.exports = router