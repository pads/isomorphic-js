var express = require('express');
var aboutRouter = require('./about');

var router = express.Router();

router.use('/about', aboutRouter);

module.exports = router;