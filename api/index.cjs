const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const Razorpay = require('razorpay');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const db = require('./db.cjs');

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.ADMIN_JWT_SECRET || 'mahira_secret_2026';

app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, 'design-' + Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_mock',
  key_secret: process.env.RAZORPAY_KEY_SECRET || 'mock_secret'
});

// --- AUTHENTICATION ROUTES ---

// Login
app.post('/api/auth/login', (req, res) => {
  const { identifier, password } = req.body; // identifier can be email or phone
  db.get("SELECT * FROM users WHERE email = ? OR phone = ?", [identifier, identifier], async (err, user) => {
    if (err || !user) return res.status(401).json({ error: "Invalid credentials" });
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });
    
    const token = jwt.sign({ id: user.id, email: user.email, name: user.full_name }, JWT_SECRET, { expiresIn: '24h' });
    res.json({ success: true, token });
  });
});

// Middleware to protect routes
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// --- E-COMMERCE ROUTES ---

app.get('/api/products', (req, res) => {
  db.all("SELECT * FROM products", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.get('/api/categories', (req, res) => {
  // Get unique categories and the image of the first product in that category
  const sql = `
    SELECT category, image_url 
    FROM products 
    GROUP BY category
  `;
  db.all(sql, [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.post('/api/create-payment', async (req, res) => {
  const { amount } = req.body;
  const options = {
    amount: amount * 100, // paisa
    currency: "INR",
    receipt: "receipt_" + Date.now()
  };
  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/verify-payment', upload.single('designFile'), (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, name, email, phone, address, product_name, quantity, amount, instructions } = req.body;
  const file_url = req.file ? `/uploads/${req.file.filename}` : '';

  const hmac = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET || 'mock_secret');
  hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
  const generated_signature = hmac.digest('hex');

  if (generated_signature !== razorpay_signature && process.env.RAZORPAY_KEY_ID !== 'rzp_test_mock') {
    return res.status(400).json({ error: "Invalid payment signature" });
  }

  db.run(`INSERT INTO orders (razorpay_order_id, razorpay_payment_id, name, email, phone, address, product_name, quantity, amount, instructions, file_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [
    razorpay_order_id, razorpay_payment_id, name, email, phone, address, product_name, quantity, amount, instructions, file_url
  ], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true, message: 'Order placed successfully', orderId: this.lastID });
  });
});

// Admin Orders (Protected)
app.get('/api/admin/orders', authenticateToken, (req, res) => {
  db.all("SELECT * FROM orders ORDER BY timestamp DESC", [], (err, rows) => {
    if (err) {
      console.error('DB ERROR [Orders]:', err.message);
      return res.status(500).json({ error: "System Data Failure", details: err.message });
    }
    res.json(rows || []);
  });
});

// Admin Products CRUD (Protected)
app.post('/api/admin/products', authenticateToken, upload.single('productImage'), (req, res) => {
  const { name, description, price, category, min_quantity } = req.body;
  const image_url = req.file ? `/uploads/${req.file.filename}` : '';
  
  db.run("INSERT INTO products (name, description, price, category, image_url, min_quantity) VALUES (?, ?, ?, ?, ?, ?)", [
    name, description, price, category, image_url, min_quantity
  ], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true, id: this.lastID });
  });
});

app.put('/api/admin/products/:id', authenticateToken, upload.single('productImage'), (req, res) => {
  const { name, description, price, category, min_quantity, current_image_url } = req.body;
  const image_url = req.file ? `/uploads/${req.file.filename}` : current_image_url;
  
  db.run("UPDATE products SET name=?, description=?, price=?, category=?, image_url=?, min_quantity=? WHERE id=?", [
    name, description, price, category, image_url, min_quantity, req.params.id
  ], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true });
  });
});

app.delete('/api/admin/products/:id', authenticateToken, (req, res) => {
  db.run("DELETE FROM products WHERE id=?", [req.params.id], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true });
  });
});

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
