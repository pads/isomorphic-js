var express = require('express');
var playlistsRouter = require('./playlists');
var songsRouter = require('./songs');

var router = express.Router();

router.use('/playlists', playlistsRouter);
router.use('/playlists/:playlist_id/songs', songsRouter);

module.exports = router;
