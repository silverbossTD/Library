const User          = require('../models/User');
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
}

module.exports = new SettingController();
