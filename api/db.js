const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');
const isProduction = process.env.NODE_ENV === 'production';
const dbPath = isProduction ? path.join('/tmp', 'mahira_ecommerce.db') : path.join(__dirname, 'mahira_ecommerce.db');

if (isProduction && !fs.existsSync(dbPath)) {
  try {
    const bundledDbPath = path.join(process.cwd(), 'api', 'mahira_ecommerce.db');
    if (fs.existsSync(bundledDbPath)) {
      fs.copyFileSync(bundledDbPath, dbPath);
      console.log('Production DB Initialized from Bundle');
    }
  } catch (err) {
    console.error('DB Initialization Error:', err);
  }
}

const db = new sqlite3.Database(dbPath);

db.serialize(() => {
  // PRODUCTS TABLE
  db.run(`CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    description TEXT,
    price REAL,
    category TEXT,
    image_url TEXT,
    min_quantity INTEGER
  )`);

  // ORDERS TABLE
  db.run(`CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    razorpay_order_id TEXT,
    razorpay_payment_id TEXT,
    name TEXT,
    email TEXT,
    phone TEXT,
    address TEXT,
    product_name TEXT,
    quantity INTEGER,
    amount REAL,
    instructions TEXT,
    file_url TEXT,
    status TEXT DEFAULT 'PAID',
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);

  // USERS TABLE
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    full_name TEXT,
    email TEXT UNIQUE,
    phone TEXT UNIQUE,
    password TEXT,
    role TEXT DEFAULT 'admin'
  )`);

  // SEED ADMIN USER (Using sync hashing for database serialization)
  const adminPassword = bcrypt.hashSync('admin_mahira_2026', 10);
  
  db.get("SELECT * FROM users WHERE email = 'admin@mahira.com'", (err, row) => {
    if (!row) {
      db.run("INSERT INTO users (full_name, email, phone, password, role) VALUES (?, ?, ?, ?, ?)", [
        'Mahira Admin', 'admin@mahira.com', '916386658443', adminPassword, 'admin'
      ]);
      console.log('Admin Credentials Seeded Successfully.');
    } else {
      db.run("UPDATE users SET password = ?, phone = ? WHERE email = 'admin@mahira.com'", [adminPassword, '916386658443']);
      console.log('Admin Credentials Verified.');
    }
  });
});

console.log('Logistics Database Ready.');
module.exports = db;
