var mongoose = require('mongoose');

module.exports = mongoose.model('Song', mongoose.Schema({
  artist: String,
  title: String,
  genre: String,
  playlist: {type: mongoose.Schema.Types.ObjectId, ref: 'Playlist'}
}));
