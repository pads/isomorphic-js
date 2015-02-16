/** @jsx React.DOM */
'use strict';

var React = require('react');
var ReactAsync = require('react-async');
var Link = require('react-router-component').Link;
var request = require('../src/api-client');
var Layout = require('./Layout.jsx');
var Playlist = require('./Playlist.jsx');
var PlaylistForm = require('./PlaylistForm.jsx');

var Playlists = React.createClass({
  mixins: [ReactAsync.Mixin],

  handlePlaylistSubmit: function(playlist) {
    var playlists = this.state.playlists;
    request.post('/api/playlists', this.props.host, playlist, function (response) {
      playlists.push(response.body.playlist);
      this.setState({playlists: playlists});
    }.bind(this));
  },

  createPlaylist: function(playlist, callback) {
    var host = this.props.host;
    request.post('/api/playlists', host, playlist, function () {
      request.get('/api/playlists', host, function (response) {
        callback(null, {playlists: response.body.playlists});
      });
    });
  },

  getInitialStateAsync: function(callback) {
    if(this.props.body && this.props.body.playlist) {
      this.createPlaylist({playlist: this.props.body.playlist}, callback);
    } else {
      request.get('/api/playlists', this.props.host, function (response) {
        callback(null, {playlists: response.body.playlists});
      });
    }
  },

  render: function() {
    var playlistNodes = this.state.playlists.map(function (playlist) {
      var href = '/playlists/' + playlist._id;
      return (
        <li key={playlist._id}>
          <Link href={href}>{playlist.name}</Link>
        </li>
      );
    });

    return (
      <Layout title="Playlists">
        <h1>Playlists</h1>
        <ul>
          {playlistNodes}
        </ul>
        <PlaylistForm onPlaylistSubmit={this.handlePlaylistSubmit}>
        </PlaylistForm>
      </Layout>
    );
  }

});

module.exports = Playlists;
