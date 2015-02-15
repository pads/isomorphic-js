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
    request.post('/api/playlists', this.props.host, playlist, function (response) {
      this.state.playlists.push(response.body.playlist);
      this.setState({playlists: playlists});
    }.bind(this));
  },

  getInitialStateAsync: function(callback) {
    request.get('/api/playlists', this.props.host, function (response) {
      callback(null, {playlists: response.body.playlists});
    });
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
