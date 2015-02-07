/** @jsx React.DOM */
'use strict';

var React = require('react');
var Router = require('react-router-component');
var Home = require('../views/Home.jsx');
var About = require('../views/About.jsx');
var NotFoundPage = require('../views/NotFound.jsx');

var Pages = Router.Pages;
var Page = Router.Page;
var NotFound = Router.NotFound;

var App = React.createClass({

  render: function () {
    return (
      <html lang="en-gb">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="stylesheets/style.css" />
        </head>
        <Pages ref="router" path={this.props.path}>
          <Page path="/" handler={Home} />
          <Page path="/About" handler={About} />
          <NotFound handler={NotFoundPage} />
        </Pages>
        <script src="/javascripts/client.js"></script>
      </html>
    );
  }
});

module.exports = App;
