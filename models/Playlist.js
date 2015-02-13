var mongoose = require('mongoose');

module.exports = mongoose.model('Playlist', mongoose.Schema({
  name: String
}));
