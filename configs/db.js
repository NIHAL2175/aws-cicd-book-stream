const mysql = require('mysql2');

const db = mysql.createConnection({
   host: 'localhost',
   port: '3306',
   user: 'root',
   password: 'DB_PASSWORD',
   database: 'react_node_app'
});

module.exports = db;