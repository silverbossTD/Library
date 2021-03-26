const express     = require('express');
const controller  = require('../controllers/book.controller');
const router      = express.Router();

router.post('/getbooks', controller.getBooks);

module.exports = router;
