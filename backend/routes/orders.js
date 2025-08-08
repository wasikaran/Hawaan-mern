// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const Order = require('../models/order');
const fetchuser = require('../middleware/fetchuser')


router.post("/create", fetchuser, async (req, res) => {
  const { userInfo, cartItems, total } = req.body;

  if (!userInfo || !cartItems || cartItems.length === 0) {
    return res.status(400).json({ message: "Invalid order data" });
  }

  const newOrder = new Order({
    user: req.user.id,
    userInfo,
    cartItems,
    total,
  });

  try {
    await newOrder.save();
    res.status(201).json({ message: "Order placed successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// GET all orders
router.get('/getAllOrders', fetchuser, async (req, res) => {
  try {
    const orders = await Order.find({user: req.user.id}).sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch orders', error });
  }
});

// DELETE order by ID
router.delete('/deleteOrder/:id', async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete order', error });
  }
});


module.exports = router;
