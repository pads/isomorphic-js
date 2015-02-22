/** @jsx React.DOM */
'use strict';

var React = require('react');
var ReactAsync = require('react-async');
var Layout = require('./Layout.jsx');
var request = require('../src/api-client');
var SongForm = require('./SongForm.jsx');

var Playlist = React.createClass({
  mixins: [ReactAsync.Mixin],

  handleSongSubmit: function(song) {
    var playlist = this.state.playlist;
    var host = this.props.host;
    request.post('/api/playlists/' + playlist._id + '/songs', host, song, function (response) {
      playlist.songs.push(response.body.song);
      this.setState({playlist: playlist});
    }.bind(this));
  },

  createSong: function(songBody, callback) {
    var host = this.props.host;
    var playlistId = songBody.song.playlist;
    request.post('/api/playlists/' + playlistId + '/songs', host, songBody, function () {
      request.get('/api/playlists/' + playlistId, host, function (response) {
        callback(null, {playlist: response.body.playlist});
      });
    });
  },

  getInitialStateAsync: function(callback) {
    if(this.props.body && this.props.body.song) {
      this.createSong({song: this.props.body.song}, callback);
    } else {
      request.get('/api/playlists/' + this.props.id, this.props.host, function (response) {
        callback(null, {playlist: response.body.playlist});
      });
    }
  },

  render: function() {
    var songNodes = this.state.playlist.songs.map(function (song) {
      return (
        <li key={song._id}>
          <h3>{song.artist} - {song.title}</h3>
          <p>Genre: {song.genre}</p>
        </li>
      );
    });

    var playlistName = this.state.playlist.name;
    var title = "Playlist: " + playlistName;
    return (
      <Layout title={title}>
        <h1>Playlist: {playlistName}</h1>
        <h2>Songs:</h2>
        <ul>
          {songNodes}
        </ul>
        <SongForm playlistId={this.state.playlist._id}
                  onSongSubmit={this.handleSongSubmit}>
        </SongForm>
      </Layout>
    );
  }

});

module.exports = Playlist;
