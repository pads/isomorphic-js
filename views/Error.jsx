/** @jsx React.DOM */
'use strict';

var React = require('react');
var DocumentTitle = require('react-document-title');

var Error = React.createClass({

  render: function() {
    return (
      <DocumentTitle title="Oops!">
        <section>
          <p>{this.props.message}</p>
          <p>{this.props.error}</p>
        </section>
      </DocumentTitle>
    );
  }

});

module.exports = Error;