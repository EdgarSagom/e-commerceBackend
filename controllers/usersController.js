const User = require('../models/usersModel')

const asyncHandler = require('express-async-handler')
const validateMongoDbId = require('../utils/validateMongoDbId')
const { generateToken } = require('../config/jwtoken')
const { generateRefreshToken } = require('../config/refreshToken')
const jwt = require('jsonwebtoken')

// Create a User
const createUser = asyncHandler(async (req, res) => {
    const email = req.body.email
    const findUser = await User.findOne({ email: email })
    if (!findUser) {
        // Create a new User
        const newUser = await User.create(req.body)
        res.json(newUser)
    } else {
        // User already exists
        throw new Error('User already exists')
    }
})

// Login a User
const loginUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body
    const findUser = await User.findOne({ email })
    if (findUser && (await findUser.isPasswordMatched(password))) {
        const refreshToken = await generateRefreshToken(findUser?._id)
        const updateUser = await User.findByIdAndUpdate(findUser.id, {
            refreshToken: refreshToken
        },{
            new: true
        })

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 72 * 60 * 60 * 1000
        })
        
        res.json({
            _id: findUser?.id,
            firstname: findUser?.firstname,
            lastname: findUser?.lastname,
            email: findUser?.email,
            mobile: findUser?.mobile,
            token: generateToken(findUser?.id)
        })
    } else {
        throw new Error('Invalid credentials')
    }
})

// login a admin
const loginAdmin = asyncHandler(async (req, res) => {
    const {email, password} = req.body
    const findAdmin = await User.findOne({ email })
    if (findAdmin.role !== 'admin') throw new Error('Not Authorised')
    if (findAdmin && (await findAdmin.isPasswordMatched(password))) {
        const refreshToken = await generateRefreshToken(findAdmin?._id)
        const updateAdmin = await User.findByIdAndUpdate(findAdmin.id, {
            refreshToken: refreshToken
        },{
            new: true
        })

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 72 * 60 * 60 * 1000
        })
        
        res.json({
            _id: findAdmin?.id,
            firstname: findAdmin?.firstname,
            lastname: findAdmin?.lastname,
            email: findAdmin?.email,
            mobile: findAdmin?.mobile,
            token: generateToken(findAdmin?.id)
        })
    } else {
        throw new Error('Invalid credentials')
    }
})

// Handle refreshToken
const handleRefreshToken = asyncHandler(async (req, res) => {
    const cookie = req.cookies
    if (!cookie?.refreshToken) throw new Error('No Refresh Token in Cookies')

    const refreshToken = cookie.refreshToken
    const user = await User.findOne({ refreshToken })
    if (!user) throw new Error('No refresh token present in db or not matched')

    jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
        if (err || user.id !== decoded.id) {
            throw new Error('There is something wrong with refresh token')
        }
        const accessToken = generateToken(user?._id)
        res.json({ accessToken })
    })
})

// Logout funcionality
const logout = asyncHandler(async (req, res) => {
    const cookie = req.cookies
    if (!cookie?.refreshToken) throw new Error('No Refresh Token in Cookies')

    const refreshToken = cookie.refreshToken
    const user = await User.findOne({ refreshToken })

    if (!user) {
        res.clearCookie('refreshToken', {
            httpOnly: true,
            secure: true
        })
        return res.sendStatus(204)
    }

    await User.findOneAndUpdate(refreshToken, {
        refreshToken: ''
    })

    res.clearCookie('refreshToken', {
        httpOnly: true,
        secure: true
    })
    res.sendStatus(204)
})

// Update a user
const updateUser = asyncHandler(async (req, res) => {
    const { _id } = req.user
    validateMongoDbId(_id)
    
    try {
        const upUser = await User.findByIdAndUpdate(_id, {
            firstname: req?.body?.firstname,
            lastname: req?.body?.lastname,
            email: req?.body?.email,
            mobile: req?.body?.mobile
        },{
            new: true
        })
        res.json(upUser)
    } catch (error) {
        throw new Error(error)
    }
})

// saveAddress a user
const saveAddress = asyncHandler(async (req, res, next) => {
    const { _id } = req.user
    validateMongoDbId(_id)

    try {
        const updateAddress = await User.findByIdAndUpdate(_id, {
            address: req?.body?.address
        },{
            new: true
        })
        res.json(updateAddress)
    } catch (error) {
        throw new Error(error)
    }
})

// Get all users
const getAllUsers = asyncHandler(async (req, res) => {
    try {
        const getUsers = await User.find()
        res.json(getUsers)
    } catch (error) {
        throw new Error(error)
    }
})

// Get a single user
const getUser = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongoDbId(id)

    try {
        const user = await User.findById(id)
        res.json(user)
    } catch (error) {
        throw new Error(error)
    }
})

// Delete a single user
const deleteUser = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongoDbId(id)

    try {
        const delUser = await User.findByIdAndDelete(id)
        res.json(delUser)
    } catch (error) {
        throw new Error(error)
    }
})

// Blocked a user
const blockedUser = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongoDbId(id)

    try {
        const block = await User.findByIdAndUpdate(id, {
            isBlocked: true
        },{
            new: true
        })
        res.json(block)
    } catch (error) {
        throw new Error(error)
    }
})

// Unblocked a user
const unblockedUser = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongoDbId(id)

    try {
        const unblock = await User.findByIdAndUpdate(id, {
            isBlocked: false
        },{
            new: true
        })
        res.json({
            message: 'User Unblocked'
        })
    } catch (error) {
        throw new Error(error)
    }
})

// whistlist a user
const getWishlist = asyncHandler(async (req, res) => {
    const { _id } = req.user

    try {
        const findUser = await User.findById(_id).populate('wishlist')
        res.json(findUser)
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = {
    createUser,
    loginUser,
    getAllUsers,
    getUser,
    deleteUser,
    updateUser,
    blockedUser,
    unblockedUser,
    handleRefreshToken,
    logout,
    loginAdmin,
    getWishlist,
    saveAddress
}