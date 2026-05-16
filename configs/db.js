const mysql = require('mysql2');

const db = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test connection without crashing the app
db.getConnection((err, connection) => {
  if (err) {
    console.error('DB connection failed:', err.message);
  } else {
    console.log('Connected to MySQL Database');
    connection.release();
  }
});

module.exports = db;