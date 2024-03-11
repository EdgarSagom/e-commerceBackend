const express = require('express')
const router = express.Router()
const { protect, isAdmin } = require('../middleware/authMiddleware')
const { uploadPhoto, productImgResize } = require('../middleware/uploadImage')
const { uploadImages, deleteImages } = require('../controllers/uploadController')

router.post('/', protect, isAdmin, uploadPhoto.array('images', 10), productImgResize, uploadImages)

router.delete('/delete-img/:id', protect, isAdmin, deleteImages)

module.exports = router
