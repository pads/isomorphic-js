var mongoose = require('mongoose');
var Song = require('./Song');

module.exports = mongoose.model('Playlist', mongoose.Schema({
  name: String,
  songs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }]
}));
