const mongoose = require('mongoose');

const RatingSchema=mongoose.Schema({
    User:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    Shop:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Shop',
        required: true
    },
    Stars:{
        type: String,
        required :[true,'stars is requried']
    },
    Review:{
        type: String,
        required :[true,'review is requried']
    },
    CreatedAt:{
        type: Date,
        default : Date.now(),
        required :[true,'Date is requried']
    }
})

module.exports=mongoose.model('Rating',RatingSchema);