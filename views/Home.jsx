/** @jsx React.DOM */
'use strict';

var React = require('react');

var Home = React.createClass({

  render: function() {
    return (
      <section>
        <h1>WOO!</h1>
        <a href="/About">About</a>
      </section>
    );
  }

});

module.exports = Home;