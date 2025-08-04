// routes/products.js
const Product = require('../models/product');
const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');

router.post('/addProduct', fetchuser, async (req, res) => {
  try {
    const {
      id,
      name,
      image,
      description,
      originalPrice,
      brand,
      rating,
      category,
      sizes,
      colors,
      quantity,
      subCategory
    } = req.body;

    const product = new Product({
      user: req.user.id,  
      id,
      name,
      image,
      description,
      originalPrice,
      brand,
      rating,
      category,
      sizes,
      colors,
      quantity,
      subCategory
    });

    await product.save();
    res.status(201).json(product);
    
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ error: error.message });
  }
});

router.get('/getAllproducts', fetchuser, async (req, res) => {
  try {
    const products = await Product.find({ user: req.user.id }); // ✅ Await added
    res.json(products);
  } catch (error) {
    console.error("Failed to fetch products:", error.message);
    res.status(500).send("Internal Server Error");
  }
});


router.delete('/delete/:id', fetchuser, async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id 
    });

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.delete('/deleteAll', fetchuser, async (req, res) => {
  try {
    const result = await Product.deleteMany({ user: req.user.id });

    res.status(200).json({
      message: 'All products deleted successfully',
      deletedCount: result.deletedCount,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});


// GET single product by ID
router.get('/GSP/:id', fetchuser, async (req, res) => {
  try {
    const productId = req.params.id;
    
    const product = await Product.findOne({user: req.user.id, id: productId }); // "id" is your custom product id e.g., "mc002"

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});


module.exports = router;
