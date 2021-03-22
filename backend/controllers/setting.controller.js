const User          = require('../models/User');
const Book          = require('../models/Book');

const imgur         = require('imgur-upload');
const shortid       = require('shortid');
const myClientID    = "368efbb07588b30";

imgur.setClientID(myClientID);


class SettingController {
    async editProfile(req, res, next) {
        User.updateOne({ id: req.body.id }, {description: req.body.description})
        .then(() => res.send('Edited profile success'));
    }
    async updateAvatar(req, res, next) {
        const file = req.files.file;
        const filename = shortid.generate() + '.png';
        let uploadDir = './public/images/';

        await file.mv(uploadDir + filename);
        await imgur.upload(uploadDir + filename, function(err, respone){
            User.updateOne({ id: req.body.id }, {avatar: `${respone.data.link}`})
            .then(() => res.send('Updated avatar success'));
        });
    }
    async uploadBook(req, res, next) {
        const file = req.files.file;
        const filename = shortid.generate() + '.png';
        const uploadDir = './public/images/';

        const filePdf = new Buffer.from(req.files.pdf.data, 'base64');

        await file.mv(uploadDir + filename);
        await imgur.upload(uploadDir + filename, function(err, respone){
            const newBook = new Book({
                id:             shortid.generate(),
                image:          `${respone.data.link}`,
                title:          req.body.title,
                author:         req.body.author,
                description:    req.body.description,
                date:           new Date(),
                text:           filePdf,
                userId:         req.body.id
            });
            newBook.save()
            .then(() => res.send('Upload book success'))
        });
    }
}

module.exports = new SettingController();
