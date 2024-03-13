const mongoose = require('mongoose')

const validateMongoDbId = (id) => {
    const isVailid = mongoose.Types.ObjectId.isValid(id)
    if (!isVailid) {
        throw new Error('This id is not valid or not Found')
    }
}

module.exports = validateMongoDbId