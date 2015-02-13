var express = require('express');
var aboutRouter = require('./about');
var playlistsRouter = require('./playlists');

var router = express.Router();

router.use('/about', aboutRouter);
router.use('/playlists', playlistsRouter);

module.exports = router;
