/** @jsx React.DOM */
'use strict';

var React = require('react');
var ReactAsync = require('react-async');
var Link = require('react-router-component').Link;
var DocumentTitle = require('react-document-title');
var request = require('../src/api-client');

var Playlist = React.createClass({
  //mixins: [ReactAsync.Mixin],

  //getInitialStateAsync: function(callback) {
  //  request.get('/api/playlists/' + this.props.id, this.props.host, function (response) {
  //    callback(null, {playlist: response.body.playlist});
  //  });
  //},

  render: function() {
    return (
      <DocumentTitle title="Playlist">
        <section>
          <h1>{this.props.children}</h1>
        </section>
      </DocumentTitle>
    );
  }

});

module.exports = Playlist;
