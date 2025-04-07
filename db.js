const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Bobo@2004',
  database: 'user_data',
});

module.exports = db;

