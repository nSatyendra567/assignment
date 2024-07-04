const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    shopname: {
        type: String,
        required: [true, 'Shop name is required']
    },
    rating: {
        type: String,
        required: [true, 'Rating is required']
    },
    address: {
        type: String,
        required: [true, 'Shop address is required'],
        maxlength: 400
    },
    CreatedAt: {
        type: Date,
        default: Date.now,
        required: [true, 'Date is required']
    }
});

module.exports = mongoose.model('Shop', shopSchema);
