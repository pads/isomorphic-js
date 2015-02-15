/** @jsx React.DOM */
'use strict';

var React = require('react');
var Layout = require('./Layout.jsx');

var Home = React.createClass({

  render: function() {
    return (
      <Layout title="Home">
        <h1>Welcome</h1>
        <p>This is an example application demonstrating isomorphic JS.</p>
        <p>It's a bit like Spotify, but for Brummies.</p>
      </Layout>
    );
  }

});

module.exports = Home;
