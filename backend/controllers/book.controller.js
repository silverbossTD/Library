const User          = require('../models/User');
const Book          = require('../models/Book');

class BookController {
    async getBooks(req, res, next) {
        Book.find({})
        .then((books) => {
            books = books.map(book => book = book.toObject());
            books.sort(function(a,b){
              return b.stars - a.stars;
            });
            res.send(books);
        });
    }
    async informationBook(req, res, next) {
        Book.find({ id: req.params.id })
        .then((books) => {
            books = books.map(book => book = book.toObject());
            res.send(books);
        });
    }
    async likeBook(req, res, next) {
        Book.updateOne({ id: req.params.id }, {userlike: req.body.userlike, stars: req.body.stars})
        .then(() => res.send('Liked post'));
    }
}

module.exports = new BookController();
