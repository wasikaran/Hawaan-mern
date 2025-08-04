const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
        user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
id:{
    type: String,
    required: true,
},
  name: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  originalPrice: {
    type: Number,
    required: true,
  },

  brand: {
    type: String,
    required: true,
  },

  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },

  subCategory: {
    type: String,
    required: true,
  },
    category: {
    type: String,
    required: true,
  },
  quantity:{
   type: Number,
   required: true,
  },

  sizes: {
    type: String, 
  },

  colors: {
    type: String, 
  },
  Date:{
     type: Date,
     default: Date.now
    }
},
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
