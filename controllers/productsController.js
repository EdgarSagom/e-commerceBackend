const Product = require('../models/productsModel')

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
        const getProducts = await Product.find()
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