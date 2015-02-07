/** @jsx React.DOM */
'use strict';

var React = require('react');
var Link = require('react-router-component').Link;

var Home = React.createClass({

  render: function() {
    return (
      <section>
        <h1>WOO!</h1>
        <Link href="/About">About</Link>
      </section>
    );
  }

});

module.exports = Home;