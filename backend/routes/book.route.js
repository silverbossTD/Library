const express     = require('express');
const controller  = require('../controllers/book.controller');
const router      = express.Router();

router.post('/getbooks', controller.getBooks);

router.post('/informationbook/:id', controller.informationBook);

module.exports = router;
