/** @jsx React.DOM */
'use strict';

var React = require('react');
var ReactAsync = require('react-async');
var request = require('../src/api-client');
var Layout = require('./Layout.jsx');
var Playlist = require('./Playlist.jsx');

var Playlists = React.createClass({
  mixins: [ReactAsync.Mixin],

  getInitialStateAsync: function(callback) {
    request.get('/api/playlists', this.props.host, function (response) {
      callback(null, {playlists: response.body.playlists});
    });
  },

  render: function() {
    var playlistNodes = this.state.playlists.map(function (playlist) {
      return (
        <Playlist key={playlist._id} id={playlist._id}>
          {playlist.name}
        </Playlist>
      );
    });
    return (
      <Layout title="Playlists">
        <h1>Playlists</h1>
        {playlistNodes}
      </Layout>
    );
  }

});

module.exports = Playlists;
