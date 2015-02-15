/** @jsx React.DOM */
'use strict';

var React = require('react');
var Layout = require('./Layout.jsx');

var Error = React.createClass({

  render: function() {
    return (
      <Layout title="Oops!">
        <h1>Sorry, an unexpected error occurred:</h1>
          <p>{this.props.message}</p>
      </Layout>
    );
  }

});

module.exports = Error;
