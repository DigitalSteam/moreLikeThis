const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'relevant'
});

connection.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log('Connected!');
  }
});

exports.connection = connection;