const Color = require('../models/colorsModel')
const asyncHandler = require('express-async-handler')
const validateMongoDbId = require('../utils/validateMongoDbId')

const createColor = asyncHandler(async (req, res) => {
    try {
        const newColor = await Color.create(req.body)
        res.json(newColor)
    } catch (error) {
        throw new Error(error)
    }
})

const updateColor = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongoDbId(id)

    try {
        const updateCo = await Color.findByIdAndUpdate(id, req.body, {
            new: true
        })
        res.json(updateCo)
    } catch (error) {
        throw new Error(error)
    }
})

const deleteColor = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongoDbId(id)

    try {
        const deleteCo = await Color.findByIdAndDelete(id)
        res.json(deleteCo)
    } catch (error) {
        throw new Error(error)
    }
})

const getColor = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongoDbId(id)

    try {
        const getCo = await Color.findById(id)
        res.json(getCo)
    } catch (error) {
        throw new Error(error)
    }
})

const getAllColor = asyncHandler(async (req, res) => {
    try {
        const getAllCo = await Color.find()
        res.json(getAllCo)
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = {
    createColor,
    updateColor,
    deleteColor,
    getColor,
    getAllColor
}