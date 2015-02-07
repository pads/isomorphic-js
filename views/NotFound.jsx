/** @jsx React.DOM */
'use strict';

var React = require('react');

var NotFound = React.createClass({

  render: function() {
    return (
      <section>
        <h1>Sorry, the page you are looking for does not exist</h1>
      </section>
    );
  }

});

module.exports = NotFound;