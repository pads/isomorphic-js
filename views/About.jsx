/** @jsx React.DOM */
'use strict';

var React = require('react');
var ReactAsync = require('react-async');
var Link = require('react-router-component').Link;
var request = require('superagent');

var About = React.createClass({
  mixins: [ReactAsync.Mixin],

  getInitialStateAsync: function(callback) {
    var url;
    if(process.browser) {
      url = '/api/about';
    } else {
      url = this.props.host + '/api/about';
    }

    request.get(url, function (response) {
      callback(null, {name: response.body.name});
    });
  },

  render: function() {
    return (
      <section>
        <h1>About</h1>
        <p>{this.state.name}</p>
        <Link href="/">Home</Link>
      </section>
    )
  }

});

module.exports = About;