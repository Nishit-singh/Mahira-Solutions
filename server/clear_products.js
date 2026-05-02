const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./mahira_ecommerce.db');

db.run("DELETE FROM products", function(err) {
  if (err) {
    console.error('Error clearing products:', err.message);
  } else {
    console.log('--- Product Catalog Cleared ---');
    console.log(`Successfully removed all products from the database.`);
    console.log('------------------------------');
  }
  db.close();
});
