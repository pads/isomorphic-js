/** @jsx React.DOM */
'use strict';

var React = require('react');
var ReactAsync = require('react-async');
var Link = require('react-router-component').Link;
var DocumentTitle = require('react-document-title');
var request = require('../src/api-client');

var About = React.createClass({
  mixins: [ReactAsync.Mixin],

  getInitialStateAsync: function(callback) {
    request.get('/api/about', this.props.host, function (response) {
      callback(null, {name: response.body.name});
    });
  },

  render: function() {
    return (
      <DocumentTitle title="About">
        <section>
          <h1>About</h1>
          <p>{this.state.name}</p>
          <Link href="/">Home</Link>
        </section>
      </DocumentTitle>
    );
  }

});

module.exports = About;