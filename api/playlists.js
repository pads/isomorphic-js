var express = require('express');
var Playlist = require('../models/Playlist');

var router = express.Router({mergeParams: true});

router.route('/')
  .get(function(request, response) {
    Playlist.find({}, function(error, playlists) {
      response.json({
        playlists: playlists
      });
    });
  })
  .post(function(request, response) {
    Playlist.create(request.body.playlist, function(error, playlist) {
      response.json({
        playlist: playlist
      });
    });
  });

router.route('/:id')
  .get(function(request, response) {
    Playlist.findById(request.params.id, function(error, playlist) {
      response.json({
        playlist: playlist
      });
    });
  })
  .put(function(request, response) {
    Playlist.findOneAndUpdate({ _id: request.params.id }, request.body.playlist, {}, function(error, playlist) {
      response.json({
        playlist: playlist
      });
    });
  });

module.exports = router;
