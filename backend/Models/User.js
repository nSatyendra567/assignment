const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    role: {
        type: String,
        enum: ['User', 'Admin', 'Shopkeeper'], 
        required: true
    },
    CreatedAt: {
        type: Date,
        default: Date.now,
        required: [true, 'Date is required']
    },
    rating: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rating'
    }],
    shop: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Shop'
    }]
});

module.exports = mongoose.model('User', userSchema);
