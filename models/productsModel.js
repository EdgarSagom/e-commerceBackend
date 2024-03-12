const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    sold: {
        type: Number,
        default: 0
    },
    images: [{
        public_id: String,
        url: String
    }],
    color: [],
    tags: [],
    ratings: [{
        star: Number,
        comment: String,
        postedby: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }],
    totalRating: {
        type: String,
        default: 0
    }
},{
    timestamps: true
});

module.exports = mongoose.model('Product', productSchema);