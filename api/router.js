var express = require('express');
var playlistsRouter = require('./playlists');

var router = express.Router();

router.use('/playlists', playlistsRouter);

module.exports = router;
