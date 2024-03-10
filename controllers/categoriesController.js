const Category = require('../models/categoriesModels')
const asyncHandler = require('express-async-handler')
const validateMongoDbId = require('../utils/validateMongoDbId')

const createCategory = asyncHandler(async (req, res) => {
    try {
        const newCategory = await Category.create(req.body)
        res.json(newCategory)
    } catch (error) {
        throw new Error(error)
    }
})

const updateCategory = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongoDbId(id)

    try {
        const updateCateg = await Category.findByIdAndUpdate(id, req.body, {
            new: true
        })
        res.json(updateCateg)
    } catch (error) {
        throw new Error(error)
    }
})

const deleteCategory = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongoDbId(id)

    try {
        const deleteCateg = await Category.findByIdAndDelete(id)
        res.json(deleteCateg)
    } catch (error) {
        throw new Error(error)
    }
})

const getCategory = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongoDbId(id)

    try {
        const getCateg = await Category.findById(id)
        res.json(getCateg)
    } catch (error) {
        throw new Error(error)
    }
})

const getAllCategory = asyncHandler(async (req, res) => {
    try {
        const getAllCateg = await Category.find()
        res.json(getAllCateg)
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = {
    createCategory,
    updateCategory,
    deleteCategory,
    getCategory,
    getAllCategory
}