const express = require('express');
const app = express();
const mysql = require('mysql2');
const bookRoutes = require('./routes/bookRoutes');

app.use(express.json());  // Middleware để xử lý JSON
app.use('/books', bookRoutes);  // Định tuyến đến các API về sách

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
