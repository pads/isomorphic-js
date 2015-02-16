/** @jsx React.DOM */
'use strict';

var React = require('react');
var request = require('../src/api-client');

var PlaylistForm = React.createClass({
  handleSubmit: function(event) {
    event.preventDefault();

    var playlist = {
      playlist: {
        name: this.refs.name.getDOMNode().value.trim()
      }
    };

    this.props.onPlaylistSubmit(playlist);
  },

  render: function() {
    return (
      <form action="/playlists" method="POST" onSubmit={this.handleSubmit}>
        <h1>Create Playlist</h1>
        <input name="playlist[name]" type="text" placeholder="Enter a playlist name" ref="name" />
        <input type="submit" value="Create" />
      </form>
    );
  }

});

module.exports = PlaylistForm;
