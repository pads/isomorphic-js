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
      <form className="pure-form" action="/playlists" method="POST" onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>Create Playlist</legend>
          <input name="playlist[name]" type="text" placeholder="Enter a playlist name" ref="name" />
          <button type="submit" className="pure-button pure-button-primary">Create</button>
        </fieldset>
      </form>
    );
  }

});

module.exports = PlaylistForm;
