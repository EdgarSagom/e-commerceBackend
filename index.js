const express = require('express')
const colors = require('colors')
const app = express()
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 4000
const dbConnect = require('./config/dbConnect')


dbConnect()

app.use('/', (req, res) => {
    res.send('Hello from server side')
})

app.listen(PORT, () => {
    console.log(`Server is running at PORT: ${PORT}`)
})