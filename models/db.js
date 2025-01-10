const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST || '127.0.0.1', // Sử dụng IPv4 localhost
  user: process.env.DB_USER || 'root',     // Thay bằng username đúng
  password: process.env.DB_PASSWORD || 'Linh@1909', // Thay bằng mật khẩu đúng
  database: process.env.DB_NAME || 'library', // Thay bằng tên database đúng
  port: process.env.DB_PORT || 3306        // Port MySQL (thường là 3306)
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err.message);
    return;
  }
  console.log('Connected to database');
});
