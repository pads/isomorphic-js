/** @jsx React.DOM */
'use strict';

var React = require('react');
var Layout = require('./Layout.jsx');

var Error = React.createClass({

  render: function() {
    return (
      <html lang="en-gb">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.5.0/pure-min.css" />
          <link rel="stylesheet" href="stylesheets/style.css" />
        </head>
        <body>
          <Layout title="Oops!">
            <h1>Sorry, an unexpected error occurred:</h1>
            <p>{this.props.message}</p>
            <p>{this.props.error.stack}</p>
          </Layout>
          <script src="/javascripts/client.js"></script>
        </body>
      </html>
    );
  }

});

module.exports = Error;
