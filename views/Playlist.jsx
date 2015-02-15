/** @jsx React.DOM */
'use strict';

var React = require('react');
var ReactAsync = require('react-async');
var Layout = require('./Layout.jsx');
var request = require('../src/api-client');

var Playlist = React.createClass({
  mixins: [ReactAsync.Mixin],

  getInitialStateAsync: function(callback) {
    request.get('/api/playlists/' + this.props.id, this.props.host, function (response) {
      callback(null, {playlist: response.body.playlist});
    });
  },

  render: function() {
    var playlistName = this.state.playlist.name;
    var title = "Playlist: " + playlistName;
    return (
      <Layout title={title}>
        <h1>Playlist: {playlistName}</h1>
      </Layout>
    );
  }

});

module.exports = Playlist;
