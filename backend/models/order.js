// models/orderModel.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    userInfo: {
        fullName: { type: String, required: true },
        email: { type: String, required: true },
        mobile: { type: String, required: true },
        address: { type: String, required: true },
        city: { type: String, required: true },
        zipCode: { type: String, required: true },
        paymentMethod: { type: String, required: true },
        orderNotes: { type: String },
    },
    cartItems: [
        {
            id: { type: String, required: true },
            name: { type: String, required: true },
            originalPrice: { type: Number, required: true },
            quantity: { type: Number, required: true },
            image: { type: String },
            subCategory: {
                type: String,
                required: true,
            },
            category: {
                type: String,
                required: true,
            },
        }
    ],
    status: {
        type: String,
        enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
        default: 'pending'
    },
    total:{
        type: Number,
    }
}, {
    timestamps: true 
});

module.exports = mongoose.model('Order', orderSchema);
