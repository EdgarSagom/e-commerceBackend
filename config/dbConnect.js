const mongoose = require('mongoose')

const dbConnect = () => {
    try {
        const conn = mongoose.connect(process.env.MONGO_URI)
        console.log('MongoDB connected successfully'.yellow.underline)
    } catch (error) {
        console.log(error)
    }
}

module.exports = dbConnect