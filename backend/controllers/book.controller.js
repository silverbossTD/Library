const User          = require('../models/User');
const Book          = require('../models/Book');

class BookController {
    async getBooks(req, res, next) {
        Book.find({})
        .then((books) => {
            books = books.map(book => book = book.toObject());
            res.send(books);
        });
    }
}

module.exports = new BookController();
