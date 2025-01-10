const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Linh@1909',
    database: 'library_db'
});

module.exports = connection;
