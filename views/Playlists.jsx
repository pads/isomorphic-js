/** @jsx React.DOM */
'use strict';

var React = require('react');
var ReactAsync = require('react-async');
var Link = require('react-router-component').Link;
var DocumentTitle = require('react-document-title');
var request = require('../src/api-client');
var Playlist = require('../views/Playlist.jsx');

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
      <DocumentTitle title="Playlists">
        <section>
          <h1>Playlists</h1>
          {playlistNodes}
          <Link href="/">Home</Link>
        </section>
      </DocumentTitle>
    );
  }

});

module.exports = Playlists;
