const express     = require('express');
const controller  = require('../controllers/setting.controller');
const router      = express.Router();

router.post('/editprofile', controller.editProfile);

router.post('/updateavatar', controller.updateAvatar);

module.exports = router;
