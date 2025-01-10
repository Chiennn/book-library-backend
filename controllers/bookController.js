const db = require('../models/db');

// Lấy tất cả sách
exports.getBooks = (req, res) => {
    db.query('SELECT * FROM books', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

// Thêm sách mới
exports.addBook = (req, res) => {
    const { title, author } = req.body;
    db.query('INSERT INTO books (title, author) VALUES (?, ?)', [title, author], (err, results) => {
        if (err) throw err;
        res.json({ message: 'Book added successfully!' });
    });
};
