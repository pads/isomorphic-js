/** @jsx React.DOM */
'use strict';

var React = require('react');

var Error = React.createClass({

  render: function() {
    return (
      <div>
        <p>{this.props.message}</p>
        <p>{this.props.error}</p>
      </div>
    );
  }

});

module.exports = Error;