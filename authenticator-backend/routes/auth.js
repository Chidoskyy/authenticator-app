const verifyToken = require('../middleware/authMiddleware');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register Route
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login Route
router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ message: 'Invalid credentials' });
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
  
      // Sign JWT
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      res.status(200).json({ token, user: { id: user._id, username: user.username, email: user.email } });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // Protected route
router.get('/protected', verifyToken, (req, res) => {
    res.json({ message: `Welcome, user ${req.user.id}! This is a protected route.` });
  });
  
  module.exports = router;

  