const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const Book = new Schema({
    id:            {type: String},
    stars:         {type: Number, default: 0},
    image:         {type: String},
    title:         {type: String},
    author:        {type: String},
    description:   {type: String},
    date:          {type: Date, default: Date.now},
    text:          {type: Buffer},
    userlike:      {type: Array, default: []},
    userId:        {type: String}
});

module.exports = mongoose.model('Book', Book);
