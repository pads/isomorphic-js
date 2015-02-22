/** @jsx React.DOM */
'use strict';

var React = require('react');
var request = require('../src/api-client');

var SongForm = React.createClass({
  handleSubmit: function(event) {
    event.preventDefault();

    var song = {
      song: {
        artist: this.refs.artist.getDOMNode().value.trim(),
        title: this.refs.title.getDOMNode().value.trim(),
        genre: this.refs.genre.getDOMNode().value.trim(),
        playlist: this.refs.playlist.getDOMNode().value.trim()
      }
    };

    this.props.onSongSubmit(song);

    // Reset form after submission
    this.refs.artist.getDOMNode().value = '';
    this.refs.title.getDOMNode().value = '';
    this.refs.genre.getDOMNode().value = '';
  },

  render: function() {
    var playlistId = this.props.playlistId;
    var action = '/playlists/' + playlistId;
    return (
      <form className="pure-form pure-form-stacked" action={action} method="POST" onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>Create Song</legend>
          <label for="artist">Artist</label>
          <input id="artist" name="song[artist]" type="text" placeholder="Enter the artist name" ref="artist" />
          <label for="title">Title</label>
          <input id="title" name="song[title]" type="text" placeholder="Enter the song name" ref="title" />
          <label for="genre">Genre</label>
          <input id="genre" name="song[genre]" type="text" placeholder="Enter the song genre" ref="genre" />
          <input type="hidden" name="song[playlist]" value={playlistId} ref="playlist" />
          <button type="submit" className="pure-button pure-button-primary">Create</button>
        </fieldset>
      </form>
    );
  }

});

module.exports = SongForm;
