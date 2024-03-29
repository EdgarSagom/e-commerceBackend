const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 4000
const dbConnect = require('./config/dbConnect')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')

const usersRoutes = require('./routes/usersRoutes')
const productsRoutes = require('./routes/productsRoutes')
const categoriesRoutes = require('./routes/categoriesRoutes')
const brandsRoutes = require('./routes/brandsRoutes')
const colorsRoutes = require('./routes/colorsRoutes')
const enquiryRoutes = require('./routes/enquiryRoutes')
const couponsRoutes = require('./routes/couponsRoutes')
const uploadRoutes = require('./routes/uploadRoutes')

dbConnect()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(morgan('dev'))

app.use('/api/users', usersRoutes)
app.use('/api/products', productsRoutes)
app.use('/api/category', categoriesRoutes)
app.use('/api/brands', brandsRoutes)
app.use('/api/colors', colorsRoutes)
app.use('/api/enquiry', enquiryRoutes)
app.use('/api/coupons', couponsRoutes)
app.use('/api/upload', uploadRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server is running at PORT: ${PORT}`.cyan)
})