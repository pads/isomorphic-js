/** @jsx React.DOM */
'use strict';

var React = require('react');
var DocumentTitle = require('react-document-title');

var NotFound = React.createClass({

  render: function() {
    return (
      <DocumentTitle title="Not Found">
        <section>
          <h1>Sorry, the page you are looking for does not exist</h1>
        </section>
      </DocumentTitle>
    );
  }

});

module.exports = NotFound;