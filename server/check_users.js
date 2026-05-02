const db = require('./db');

setTimeout(() => {
  db.all("SELECT id, full_name, email, phone, role FROM users", (err, rows) => {
    if (err) {
      console.error('Error reading users:', err);
    } else {
      console.log('\n--- Current Users in DB ---');
      console.table(rows);
      console.log('---------------------------\n');
    }
    db.close();
  });
}, 1000); // Give it a second to run the serialize block
