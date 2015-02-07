/** @jsx React.DOM */
'use strict';

var React = require('react');

var About = React.createClass({

  render: function() {
    return (
      <section>
        <h1>About</h1>
        <a href="/">Home</a>
      </section>
    )
  }

});

module.exports = About;