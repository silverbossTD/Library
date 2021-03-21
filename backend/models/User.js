const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const User = new Schema({
    id:            {type: String},
    username:      {type: String},
    email:         {type: String},
    password:      {type: String},
    description:   {type: String},
    date:          {type: Date, default: Date.now},
    avatar:        {type: String, default: 'https://i.pinimg.com/originals/fc/04/73/fc047347b17f7df7ff288d78c8c281cf.png'},
    isVerified:    {type: Boolean, default: false }
});

module.exports = mongoose.model('User', User);
