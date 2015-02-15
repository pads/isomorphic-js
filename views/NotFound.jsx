/** @jsx React.DOM */
'use strict';

var React = require('react');
var Layout = require('./Layout.jsx');

var NotFound = React.createClass({

  render: function() {
    return (
      <Layout title="Not Found">
        <h1>Sorry, the page you are looking for does not exist</h1>
      </Layout>
    );
  }

});

module.exports = NotFound;
