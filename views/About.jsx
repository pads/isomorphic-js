/** @jsx React.DOM */
'use strict';

var React = require('react');
var Link = require('react-router-component').Link;

var About = React.createClass({

  render: function() {
    return (
      <section>
        <h1>About</h1>
        <Link href="/">Home</Link>
      </section>
    )
  }

});

module.exports = About;