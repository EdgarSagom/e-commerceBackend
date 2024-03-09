const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 4000
const dbConnect = require('./config/dbConnect')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
const usersRoutes = require('./routes/usersRoutes')
const productsRoutes = require('./routes/productsRoutes')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')

dbConnect()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(morgan('dev'))

app.use('/api/users', usersRoutes)
app.use('/api/products', productsRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server is running at PORT: ${PORT}`.cyan)
})