const Coupon = require('../models/couponsModel')
const asynHandler = require('express-async-handler')
const validateMongoDbId = require('../utils/validateMongoDbId')

const createCoupon = asynHandler(async (req, res) => {
    try {
        const newCoupon = await Coupon.create(req.body)
        res.json(newCoupon)
    } catch (error) {
        throw new Error(error)
    }
})

const updateCoupon = asynHandler(async (req, res) => {
    const { id } = req.params
    validateMongoDbId(id)

    try {
        const updateCoup = await Coupon.findByIdAndUpdate(id, req.body, {
            new:true
        })
        res.json(updateCoup)
    } catch (error) {
        throw new Error(error)
    }
})

const deleteCoupon = asynHandler(async (req, res) => {
    const { id } = req.params
    validateMongoDbId(id)

    try {
        const deleteCoup = await Coupon.findByIdAndDelete(id)
        res.json(deleteCoup)
    } catch (error) {
        throw new Error(error)
    }
})

const getCoupon = asynHandler(async (req, res) => {
    const { id } = req.params
    validateMongoDbId(id)

    try {
        const getCoup = await Coupon.findById(id)
        res.json(getCoup)
    } catch (error) {
        throw new Error(error)
    }
})

const getAllCoupons = asynHandler(async (req, res) => {
    try {
        const coupons = await Coupon.find(req.body)
        res.json(coupons)
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = {
    createCoupon,
    updateCoupon,
    deleteCoupon,
    getCoupon,
    getAllCoupons
}