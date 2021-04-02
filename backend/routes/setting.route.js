const express     = require('express');
const controller  = require('../controllers/setting.controller');
const router      = express.Router();

router.post('/editprofile', controller.editProfile);

router.post('/updateavatar', controller.updateAvatar);

router.post('/uploadbook', controller.uploadBook);

router.post('/yourbooks/:id', controller.getYourBooks);

router.post('/deletebook/:id', controller.deleteBook);

router.post('/editbook/:id', controller.editBook);

module.exports = router;
