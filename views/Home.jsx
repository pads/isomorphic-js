/** @jsx React.DOM */
'use strict';

var React = require('react');
var Link = require('react-router-component').Link;
var DocumentTitle = require('react-document-title');

var Home = React.createClass({

  render: function() {
    return (
      <DocumentTitle title="Home">
        <section>
          <h1>WOO!</h1>
          <Link href="/About">About</Link>
        </section>
      </DocumentTitle>
    );
  }

});

module.exports = Home;