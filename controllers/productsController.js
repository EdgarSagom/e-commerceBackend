const Product = require('../models/productsModel')
const User = require('../models/usersModel')

const asyncHandler = require('express-async-handler')
const slugify = require('slugify')

const createProduct = asyncHandler(async (req, res) => {
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title)
        }
        const newProduct = await Product.create(req.body)
        res.json(newProduct)
    } catch (error) {
        throw new Error(error)
    }
})

const updateProduct = asyncHandler(async (req, res) => {
    const id = req.params._id

    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title)
        }

        const updateProd = await Product.findOneAndUpdate({ id }, req.body, {
            new: true
        })
        res.json(updateProd)
    } catch (error) {
        throw new Error(error)
    }
})

const deleteProduct = asyncHandler(async (req, res) => {
    const id = req.params.id

    try {
        const deleteProd = await Product.findOneAndDelete(id)
        res.json(deleteProd)
    } catch (error) {
        throw new Error(error)
    }
})

const getProduct = asyncHandler(async (req, res) => {
    const { id } = req.params
    try {
        const findProduct = await Product.findById(id)
        res.json(findProduct)
    } catch (error) {
        throw new Error(error)
    }
})

const getAllProducts = asyncHandler(async (req, res) => {
    try {
        // Filtering
        const queryObj = { ...req.query }
        const excludeFields = ['page', 'sort', 'limit', 'fields']
        excludeFields.forEach((el) => delete queryObj[el])
        console.log(queryObj)

        let queryStr = JSON.stringify(queryObj)
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`)
        
        let queryProduct = Product.find(JSON.parse(queryStr))

        // Sorting
        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ')
            queryProduct = queryProduct.sort(sortBy)
        } else {
            queryProduct = queryProduct.sort('-createdAt')
        }

        // Limiting the fields
        if (req.query.fields) {
            const fields = req.query.fields.split(',').join(' ')
            queryProduct = queryProduct.select(fields)
        } else {
            queryProduct = queryProduct.select('-__v')
        }

        // Pagination
        const page = req.query.page
        const limit = req.query.limit
        const skip = (page - 1) * limit
        queryProduct = queryProduct.skip(skip).limit(limit)

        if (req.query.page) {
            const productCount = await Product.countDocuments()
            if (skip >= productCount) throw new Error('This Page does not exists')
        }
        
        const getProducts = await queryProduct
        res.json(getProducts)
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = {
    createProduct,
    getProduct,
    getAllProducts,
    updateProduct,
    deleteProduct
}