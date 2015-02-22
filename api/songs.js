var express = require('express');
var Playlist = require('../models/Playlist');
var Song = require('../models/Song');

var router = express.Router({mergeParams: true});

router.route('/')
  .get(function(request, response) {
    Playlist.findById(request.params.playlist_id).populate('songs').exec(function(error, playlist) {
      response.json({
        songs: playlist.songs
      });
    });
  })
  .post(function(request, response) {
    Playlist.findById(request.params.playlist_id, function(error, playlist) {
      Song.create(request.body.song, function(songError, song) {
        playlist.songs.push(song._id);
        playlist.save(function(playlistError) {
          response.json({
            song: song
          });
        });
      });
    });
  });

router.route('/:id')
  .get(function(request, response) {
    Song.findById(request.params.id, function(error, song) {
      response.json({
        song: song
      });
    });
  })
  .put(function(request, response) {
    Song.findOneAndUpdate({ _id: request.params.id }, request.body.song, {}, function(error, song) {
      response.json({
        song: song
      });
    });
  });

module.exports = router;
